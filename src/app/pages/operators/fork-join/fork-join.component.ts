import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {forkJoin, interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = forkJoin(
      interval(1000).pipe(take(3)),
      interval(500).pipe(take(4)),
    );

    this.plug(observable);
  }
}
