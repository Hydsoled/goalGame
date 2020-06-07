import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldSizeService {
  fieldUpdated = new EventEmitter();
}
