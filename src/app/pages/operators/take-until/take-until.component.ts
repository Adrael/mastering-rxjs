import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent, interval} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const divClick$ = fromEvent(document, 'click')
      .pipe(
        filter((event: MouseEvent) => (<HTMLElement>event.target).tagName === 'DIV')
      );

    const observable = interval(1000)
      .pipe(
        takeUntil(divClick$)
      );

    this.plug(divClick$, null, false, true);
    this.plug(observable);
  }
}
