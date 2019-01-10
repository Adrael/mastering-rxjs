import {Component} from '@angular/core';
import {BasePageComponent} from '../../base-page/base-page.component';
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
      interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
      interval(500).pipe(take(4)),  // emit 0, 1, 2, 3 every half a second and complete
    );

    this.plug(observable);
  }
}
