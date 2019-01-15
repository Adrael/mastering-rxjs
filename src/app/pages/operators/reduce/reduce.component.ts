import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent, interval} from 'rxjs';
import {mapTo, reduce, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = fromEvent(document, 'click')
      .pipe(
        takeUntil(interval(5000)),
        mapTo(1),
        reduce((accumulated: number, one: number) => accumulated + one, 0)
      );

    this.plug(observable);
  }
}
