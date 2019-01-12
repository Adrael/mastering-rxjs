import { Component } from '@angular/core';
import { queueScheduler } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../../components/base-page/base-page.component';

@Component({
  selector: 'app-queue-scheduler',
  templateUrl: './queue-scheduler.component.html',
  styleUrls: [ './queue-scheduler.component.scss' ]
})
export class QueueSchedulerComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const self = this;

    function task(state) {
      // `this` references currently executing Action which we reschedule with new state and delay
      if (state !== 0) {
        console.log('Before:', state);
        self.results.push(`Before: ${state}`);
        this.schedule(state - 1);
        console.log('After:', state);
        self.results.push(`After: ${state}`);
      }
    }

    const scheduledTask = queueScheduler.schedule(task, 0, 3);
    this.plug(scheduledTask);
  }
}
