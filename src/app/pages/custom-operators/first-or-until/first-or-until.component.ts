import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasePageComponent } from '../../../components/base-page/base-page.component';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { firstOrUntil } from '../../../operators/first-or-until/first-or-until.operator';

@Component({
  selector: 'app-first-or-until',
  templateUrl: './first-or-until.component.html',
  styleUrls: [ './first-or-until.component.scss' ]
})
export class FirstOrUntilComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const randomTime = Math.ceil(Math.random() * 10000);
    this.log(`Random timer will wait for ${randomTime}ms before completing.`);
    this.log(`Fixed timer will wait for 5000ms before completing.`);
    this.log(`${randomTime > 5000 ? 'Fixed' : 'Random'} timer should complete first.`);

    const randomTimer = timer(randomTime)
      .pipe(map(() => 'Random timer has completed!'));

    const fixedTimer = timer(5000)
      .pipe(map(() => 'Fixed timer has completed!'));

    const observable = randomTimer
      .pipe(firstOrUntil(fixedTimer));

    this.plug(randomTimer);
    this.plug(fixedTimer);
    this.plug(observable);
  }
}
