import {Component} from '@angular/core';
import {BasePageComponent} from '../../base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = of(1, 2, 3, 4, 5)
      .pipe(
        map((value: number) => {
          if (value === 4) {
            throw new Error('four!');
          }

          return value;
        }),
        catchError((error: any) => {
          console.error('Error caught:', error.message);
          return of('I', 'II', 'III', 'IV', 'V');
        })
      );

    this.plug(observable);
  }
}
