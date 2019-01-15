import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = fromEvent(document, 'click')
      .pipe(
        first((event: MouseEvent) => (<HTMLElement>event.target).tagName === 'DIV')
      );

    this.plug(observable);
  }
}
