import {Component, EventEmitter, Injectable} from '@angular/core';
import {BetService} from '../../../shared/bet.service';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './numberSpinner.component.html',
  styleUrls: ['./numberSpinner.component.css']
})
export class NumberSpinnerComponent {
  val: number;
  isBet = false;

  constructor(private betService: BetService) {
    this.val = 0.1;
    this.betService.betUpdated.subscribe(amount => {
      if (this.val + amount <= 300) {
        this.val += amount;
      }
    });
    this.betService.isBet.subscribe(isBet => {
      this.isBet = isBet;
      if (isBet) {
        this.betService.moneyUpdated.emit(-this.val);
      }
    });
  }

  decrease() {
    if (this.val - 0.1 >= 0) {
      this.val -= 0.1;
    }
  }

  increase() {
    if (this.val + 0.1 <= 300) {
      this.val += 0.1;
    }
  }

  typeValue(event: Event) {
    const num = Number(parseFloat((event.target as HTMLInputElement).value).toFixed(2));
    if (num > 300) {
      this.val = 300;
    } else if (num < 0) {
      this.val = 0;
    } else {
      this.val = Number(parseFloat((event.target as HTMLInputElement).value).toFixed(2));
    }
  }
}
