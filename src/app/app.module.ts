import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProgressModule} from './progressbar/progress.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    ProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
