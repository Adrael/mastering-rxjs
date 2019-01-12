import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {combineLatest, timer} from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = combineLatest(
      timer(0, 1000),
      timer(500, 1000)
    );

    this.plug(observable);
  }
}
