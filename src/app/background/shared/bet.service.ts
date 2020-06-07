import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  betUpdated = new EventEmitter<number>();
}
