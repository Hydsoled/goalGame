import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  playerMoney = 5000;
  betUpdated = new EventEmitter<number>();
  isBet = new EventEmitter<boolean>();
  moneyUpdated = new EventEmitter<number>();
  clickNumber = new EventEmitter<number>();

  constructor() {
  }
}
