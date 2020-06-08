import {Component} from '@angular/core';
import {BetService} from '../../shared/bet.service';

@Component({
  selector: 'app-bet-input',
  templateUrl: './betInput.component.html',
  styleUrls: ['./betInput.component.css']
})
export class BetInputComponent {
  isBet = false;
  constructor(private betService: BetService) {
    this.betService.isBet.subscribe(val => {
      this.isBet = val;
    });
  }
  bet(amount: number){
    this.betService.betUpdated.emit(amount);
  }
}
