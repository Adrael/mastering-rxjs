import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {fromEvent, interval, merge} from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const clicks = fromEvent(document, 'click');
    const timer = interval(1000);
    const observable = merge(clicks, timer);

    this.plug(observable);
  }
}

