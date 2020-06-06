import {Component} from '@angular/core';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './numberSpinner.component.html',
  styleUrls: ['./numberSpinner.component.css']
})
export class NumberSpinnerComponent {
  val: number;
  constructor() {
    this.val = 0.1;
  }
  decrease(){
    this.val -= 0.1;
  }
  increase(){
    this.val += 0.1;
  }
}
