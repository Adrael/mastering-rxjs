import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent} from 'rxjs';
import {mapTo, scan} from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = fromEvent(document, 'click')
      .pipe(
        mapTo(1),
        scan((accumulated: number, one: number) => accumulated + one, 0)
      );

    this.plug(observable);
  }
}
