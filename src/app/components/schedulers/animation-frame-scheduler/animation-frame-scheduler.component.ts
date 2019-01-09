import { Component } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-animation-frame-scheduler',
  templateUrl: './animation-frame-scheduler.component.html',
  styleUrls: [ './animation-frame-scheduler.component.scss' ]
})
export class AnimationFrameSchedulerComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const self = this;
    const div: HTMLDivElement = document.querySelector('.example-div');

    function task(height) {
      // `this` references currently executing Action which we reschedule with new state and delay
      console.log('Setting height to:', height);
      self.results.push(`Setting height to: ${height}`);
      div.style.height = height + 'px';

      if (height < 50) {
        this.schedule(height + 1);
      }
    }

    const scheduledTask = animationFrameScheduler.schedule(task, 0, 0);
    this.plug(scheduledTask);
  }
}
