import {Component} from '@angular/core';
import {fromEvent} from 'rxjs';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = fromEvent(document, 'click')
      .pipe(
        map((event: MouseEvent) => event.clientX)
      );

    this.plug(observable);
  }
}
