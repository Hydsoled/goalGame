import {Component} from '@angular/core';
import {BetService} from '../shared/bet.service';

@Component({
  selector: 'app-game-controls',
  templateUrl: './gameControls.component.html',
  styleUrls: ['./gameControls.component.css']
})
export class GameControlsComponent {
  playerMoney = 0;
  constructor(private betService: BetService) {
    this.playerMoney = this.betService.playerMoney;
    this.betService.moneyUpdated.subscribe(val => {
      this.playerMoney += val;
    });
  }
  isBet(){
    this.betService.isBet.emit(true);
  }
}
