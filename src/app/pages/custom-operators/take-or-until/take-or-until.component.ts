import { Component } from '@angular/core';
import { fromEvent, timer } from 'rxjs';
import { BasePageComponent } from '../../../components/base-page/base-page.component';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { takeOrUntil } from '../../../operators/take-or-until/take-or-until.operator';

@Component({
  selector: 'app-take-or-until',
  templateUrl: './take-or-until.component.html',
  styleUrls: [ './take-or-until.component.scss' ]
})
export class TakeOrUntilComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = fromEvent(document, 'click')
      .pipe(
        takeOrUntil(2, timer(5000))
      );

    this.plug(observable);
  }
}
