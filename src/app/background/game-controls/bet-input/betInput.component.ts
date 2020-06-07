import {Component} from '@angular/core';
import {BetService} from '../../shared/bet.service';

@Component({
  selector: 'app-bet-input',
  templateUrl: './betInput.component.html',
  styleUrls: ['./betInput.component.css']
})
export class BetInputComponent {
  constructor(private betService: BetService) {
  }
  bet(amount: number){
    this.betService.betUpdated.emit(amount);
  }
}
