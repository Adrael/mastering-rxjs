import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {interval, of} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-flat-map',
  templateUrl: './flat-map.component.html',
  styleUrls: ['./flat-map.component.scss']
})
export class FlatMapComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = of('a', 'b', 'c')
      .pipe(
        flatMap((letter: string) => {
          return interval(1000)
            .pipe(
              map((value: number) => letter + value)
            );
        })
      );

    this.plug(observable);
  }
}
