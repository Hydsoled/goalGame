import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BackgroundComponent} from './background/background.component';
import {GameControlsComponent} from './background/game-controls/gameControls.component';
import {TableComponent} from './background/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    GameControlsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
