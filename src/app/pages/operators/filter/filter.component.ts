import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = fromEvent(document, 'click')
      .pipe(
        filter((event: MouseEvent) => (<HTMLElement>event.target).tagName === 'DIV')
      );

    this.plug(observable);
  }
}

