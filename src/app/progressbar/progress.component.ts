import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progressbar.html',
  styleUrls: ['../app.component.css'],
  encapsulation: ViewEncapsulation.None
})

/*available through Progress.module*/
export class ProgressComponent {
  /*progressbar values*/
  current = 78;
  max = 100;
  stroke = 15;
  radius = 125;
  semicircle = false;
  rounded = false;
  responsive = true;
  clockwise = true;
  color = '#45ccce';
  background = '#eaeaea';
  duration = 1400;
  animation = 'easeOutCubic';
  animationDelay = 0;
  animations = [];
  gradient = false;
  realCurrent = 0;


/*handles text position (inside circle)*/
  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }


/*function colors based on current value*/


/*current value of customer*/

}
