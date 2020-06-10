import {Component} from '@angular/core';
import {BetService} from '../shared/bet.service';

@Component({
  selector: 'app-game-controls',
  templateUrl: './gameControls.component.html',
  styleUrls: ['./gameControls.component.css']
})
export class GameControlsComponent {
  playerMoney = 0;
  bet = false;
  winMoney = 0;
  textBet = 'BET';

  constructor(private betService: BetService) {
    this.playerMoney = this.betService.playerMoney;
    this.betService.moneyUpdated.subscribe(val => {
      this.playerMoney += val;
    });
    this.betService.isBet.subscribe(val => {
      this.bet = val;
      if (val) {
        this.winMoney = 0;
      }else{
        this.textBet = 'BET';
      }
    });
    this.betService.clickNumber.subscribe(val => {
      this.winMoney = val;
      this.textBet = this.winMoney.toFixed(2).toString();
    });
  }

  isBet() {
    if (!this.bet) {
      this.betService.isBet.emit(true);
    } else if (this.winMoney !== 0) {
      this.textBet = 'BET';
      this.playerMoney += this.winMoney;
      this.betService.isBet.emit(false);
    }
  }
}
