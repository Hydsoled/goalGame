import {Component} from '@angular/core';
import {FieldSizeService} from '../../shared/fieldSize.service';

@Component({
  selector: 'app-field-size',
  templateUrl: './fieldSize.component.html',
  styleUrls: ['./fieldSize.component.css']
})
export class FieldSizeComponent {
  constructor(private fieldSizeService: FieldSizeService) {
  }

  dimension(x: number, y: number) {
    this.fieldSizeService.fieldUpdated.emit({x, y});
  }
}
