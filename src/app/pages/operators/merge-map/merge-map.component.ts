import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {interval, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = of('a', 'b', 'c')
      .pipe(
        mergeMap((letter: string) => {
          return interval(1000)
            .pipe(
              map((value: number) => letter + value)
            );
        })
      );

    this.plug(observable);
  }
}
