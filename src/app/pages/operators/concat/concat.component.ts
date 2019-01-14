import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {concat, interval, range} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const timer = interval(1000).pipe(take(4));
    const sequence = range(1, 10);
    const observable = concat(timer, sequence);

    this.plug(observable);
  }
}
