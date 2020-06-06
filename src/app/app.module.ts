import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BackgroundComponent} from './background/background.component';
import {GameControlsComponent} from './background/game-controls/gameControls.component';
import {TableComponent} from './background/table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BetInputComponent} from './background/game-controls/bet-input/betInput.component';
import {NumberSpinnerComponent} from './background/game-controls/bet-input/number-spinner/numberSpinner.component';
import {FieldSizeComponent} from './background/game-controls/field-size/fieldSize.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    GameControlsComponent,
    TableComponent,
    NumberSpinnerComponent,
    BetInputComponent,
    FieldSizeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
