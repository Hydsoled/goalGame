import {AfterContentChecked, Component, QueryList, ViewChildren} from '@angular/core';
import {FieldSizeService} from '../shared/fieldSize.service';
import {BetService} from '../shared/bet.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @ViewChildren('sqr') myDiv: QueryList<HTMLDivElement>;
  squares: boolean[][];
  x = [];
  y = [];
  isBet = false;
  money = 0;
  point = 1;
  startIndex = 0;

  constructor(private fieldSizeService: FieldSizeService, private betService: BetService) {
    this.squares = [];
    let defX = 4;
    let defY = 7;
    this.fillTable(4, 7);
    this.betService.moneyUpdated.subscribe(val => {
      this.money = val;
    });
    this.fieldSizeService.fieldUpdated.subscribe(fieldSize => {
      this.squares = [];
      this.fillTable(fieldSize.x, fieldSize.y);
      defY = this.y.length;
      defX = this.x.length;
      this.fillBombs(defX, defY);
    });
    this.fillBombs(defX, defY);

    this.betService.isBet.subscribe(isBet => {
      this.isBet = isBet;
      if (!isBet) {
        this.restartTable();
      } else {
        let indxX = 0;
        const xLength = this.x.length;
        while (indxX < xLength) {
          // @ts-ignore
          if (this.myDiv._results[this.y.length * indxX]) {
            // @ts-ignore
            this.myDiv._results[this.y.length * indxX].nativeElement.classList.add('currentSquare');
          }
          indxX++;
        }
      }
    });
  }

  onClick(x: number, y: number) {
    if (!this.isBet || this.startIndex !== y) {
      return;
    }
    this.startIndex++;
    const bomb = false;
    this.point += 0.5;
    this.betService.clickNumber.emit(this.point * -this.money);
    const indx = 0;
    const xLength = this.x.length;
    this.currentSquares(indx, bomb, xLength, x, y);
  }

  restartTable() {
    this.startIndex = 0;
    this.point = 1;
    const x1 = this.x.length;
    const y1 = this.y.length;
    this.x = [];
    this.y = [];
    setTimeout(() => {
      this.fieldSizeService.fieldUpdated.emit({
        x: x1, y: y1
      });
    }, 10);
  }

  fillBombs(defX, defY) {
    for (let j = 0; j < defY; j++) {
      this.squares[Math.floor(Math.random() * defX)][j] = true;
    }
  }

  fillTable(x, y) {
    for (let i = 0; i < x; i++) {
      const arr = [];
      for (let j = 0; j < y; j++) {
        arr.push(false);
      }
      this.squares.push(arr);
    }
    this.x = Array(x).fill(0).map((x1, i) => i);
    this.y = Array(y).fill(0).map((y2, i) => i);
  }

  currentSquares(indx, bomb, xLength, x, y) {
    let indxX = indx;
    while (indxX < xLength) {
      // @ts-ignore
      if (this.myDiv._results[this.y.length * indxX + y + 1]) {
        // @ts-ignore
        this.myDiv._results[this.y.length * indxX + y + 1].nativeElement.classList.add('currentSquare');
      }
      indxX++;
    }
    while (indx < xLength) {
      if (this.squares[indx][y]) {
        if (indx === x) {
          bomb = true;
        }
        // @ts-ignore
        this.myDiv._results[this.y.length * indx + y].nativeElement.classList.add('bomb');
      } else {
        // @ts-ignore
        this.myDiv._results[this.y.length * indx + y].nativeElement.classList.add('nonBomb');
      }
      indx++;
      if (bomb || this.y.length === y + 1) {
        if (!bomb) {
          this.betService.moneyUpdated.emit(-this.money * this.point);
        }
        this.betService.isBet.emit(false);
        bomb = false;
        return;
      }
    }
  }
}
