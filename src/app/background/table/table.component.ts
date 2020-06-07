import {Component} from '@angular/core';
import {FieldSizeService} from '../shared/fieldSize.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  squares: boolean[][];
  x = [];
  y = [];

  constructor(private fieldSizeService: FieldSizeService) {
    this.squares = [];
    for (let i = 0; i < 4; i++) {
      const arr = [];
      for (let j = 0; j < 7; j++) {
        arr.push(false);
      }
      this.squares.push(arr);
    }
    this.x = Array(4).fill(0).map((x, i) => i);
    this.y = Array(7).fill(0).map((y, i) => i);
    this.fieldSizeService.fieldUpdated.subscribe(fieldSize => {
      this.squares = [];
      for (let i = 0; i < fieldSize.x; i++) {
        const arr = [];
        for (let j = 0; j < fieldSize.y; j++) {
          arr.push(false);
        }
        this.squares.push(arr);
      }
      for (let j = 0; j < fieldSize.y; j++) {
        this.squares[Math.floor(Math.random() * 3)][j] = true;
      }
      this.x = Array(fieldSize.x).fill(0).map((x, i) => i);
      this.y = Array(fieldSize.y).fill(0).map((y, i) => i);
    });
  }

  onClick(x: number, y: number) {
    if (this.squares[x][y] === true) {
      console.log('moxvda');
    }
  }

}
