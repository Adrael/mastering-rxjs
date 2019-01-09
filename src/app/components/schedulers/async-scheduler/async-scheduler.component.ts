import { Component } from '@angular/core';
import { asyncScheduler } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-async-scheduler',
  templateUrl: './async-scheduler.component.html',
  styleUrls: [ './async-scheduler.component.scss' ]
})
export class AsyncSchedulerComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const self = this;

    function task(state) {
      // `this` references currently executing Action which we reschedule with new state and delay
      self.results.push(state);
      console.log('state is now:', state);
      this.schedule(++state, 1000);
    }

    const scheduledTask = asyncScheduler.schedule(task, 1000, 0);
    this.plug(scheduledTask);
  }
}
