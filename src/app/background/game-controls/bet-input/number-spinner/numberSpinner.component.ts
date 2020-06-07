import {Component} from '@angular/core';
import {BetService} from '../../../shared/bet.service';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './numberSpinner.component.html',
  styleUrls: ['./numberSpinner.component.css']
})
export class NumberSpinnerComponent {
  val: number;
  constructor(private betService: BetService) {
    this.val = 0.1;
    this.betService.betUpdated.subscribe(amount => {
      this.val += amount;
    });
  }
  decrease(){
    this.val -= 0.1;
  }
  increase(){
    this.val += 0.1;
  }
}
