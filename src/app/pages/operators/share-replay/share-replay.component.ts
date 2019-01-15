import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {interval} from 'rxjs';
import {shareReplay, take} from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = interval(1000)
      .pipe(
        take(4),
        shareReplay(3)
      );

    this.plug(observable, 'A');
    this.plug(observable, 'B');
  }
}
