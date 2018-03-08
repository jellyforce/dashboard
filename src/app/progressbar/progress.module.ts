import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent} from './progress.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RoundProgressModule
  ],
  exports: [
    ProgressComponent
  ]
})

export class ProgressModule {}
