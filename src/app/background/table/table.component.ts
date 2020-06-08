import {AfterContentChecked, Component, QueryList, ViewChildren} from '@angular/core';
import {FieldSizeService} from '../shared/fieldSize.service';
import {BetService} from '../shared/bet.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterContentChecked {
  @ViewChildren('sqr') myDiv: QueryList<HTMLDivElement>;
  squares: boolean[][];
  x = [];
  y = [];
  isBet = false;
  startIndex = 0;

  constructor(private fieldSizeService: FieldSizeService, private betService: BetService) {
    this.squares = [];
    let defX = 4;
    let defY = 7;
    this.fillTable(4, 7);
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
    });
  }

  ngAfterContentChecked(): void {
    if (this.myDiv) {
      // @ts-ignore
      // console.log(this.myDiv._results);
    }
  }

  onClick(x: number, y: number) {
    if (!this.isBet || this.startIndex !== y) {
      return;
    }
    this.startIndex++;
    const index = this.y.length * x + y;
    let indx = 0;
    const xLength = this.x.length;
    while (indx < xLength) {
      if (this.squares[indx][y]) {
        // @ts-ignore
        this.myDiv._results[this.y.length * indx + y].nativeElement.classList.add('bomb');
      } else {
        // @ts-ignore
        this.myDiv._results[this.y.length * indx + y].nativeElement.classList.add('nonBomb');
      }
      indx++;
    }
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

}
