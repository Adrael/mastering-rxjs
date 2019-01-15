import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {mapTo, share, tap} from 'rxjs/operators';
import {timer} from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = timer(1000);

    const example = observable.pipe(
      tap(() => console.log('***SIDE EFFECT***')),
      mapTo('***RESULT***')
    );

    const subscribe = example.subscribe((value: string) => console.log(value));
    const subscribeTwo = example.subscribe((value: string) => console.log(value));

    const sharedExample = example.pipe(share());

    const subscribeThree = sharedExample.subscribe((value: string) => console.log(value));
    const subscribeFour = sharedExample.subscribe((value: string) => console.log(value));

    this.plug(observable, null, true);
  }
}
