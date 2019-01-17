import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = interval(1000)
      .pipe(take(5));

    this.plug(observable);
  }
}
