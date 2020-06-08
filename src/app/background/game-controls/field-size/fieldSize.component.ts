import {Component} from '@angular/core';
import {FieldSizeService} from '../../shared/fieldSize.service';
import {BetService} from '../../shared/bet.service';

@Component({
  selector: 'app-field-size',
  templateUrl: './fieldSize.component.html',
  styleUrls: ['./fieldSize.component.css']
})
export class FieldSizeComponent {
  isBet = false;

  constructor(private fieldSizeService: FieldSizeService,
              private betService: BetService) {
    this.betService.isBet.subscribe(isBet => {
      this.isBet = isBet;
    });
  }

  dimension(x: number, y: number) {
    if (!this.isBet) {
      this.fieldSizeService.fieldUpdated.emit({x, y});
    }
  }
}
