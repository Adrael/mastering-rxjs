import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent, interval} from 'rxjs';
import {withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const timer$ = interval(1000);

    const observable = fromEvent(document, 'click')
      .pipe(
        withLatestFrom(timer$)
      );

    this.plug(timer$, null, false, true);
    this.plug(observable);
  }
}
