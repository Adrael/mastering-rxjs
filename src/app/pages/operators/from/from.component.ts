import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {from} from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = from([10, 20, 30]);

    this.plug(observable);
  }
}
