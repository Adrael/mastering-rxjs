import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {of} from 'rxjs';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = of('from source')
      .pipe(startWith('first', 'second'));

    this.plug(observable);
  }
}
