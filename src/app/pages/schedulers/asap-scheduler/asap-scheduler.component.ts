import { Component } from '@angular/core';
import { asapScheduler, asyncScheduler } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../../components/base-page/base-page.component';

@Component({
  selector: 'app-asap-scheduler',
  templateUrl: './asap-scheduler.component.html',
  styleUrls: [ './asap-scheduler.component.scss' ]
})
export class AsapSchedulerComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const firstScheduledTask = asyncScheduler.schedule(() => {
      console.log('async resolved!');
      this.results.push('async resolved!');
    });
    this.plug(firstScheduledTask);

    const secondScheduledTask = asapScheduler.schedule(() => {
      console.log('asap resolved!');
      this.results.push('asap resolved!');
    });
    this.plug(secondScheduledTask);
  }
}
