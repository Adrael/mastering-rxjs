import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {of} from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = of(10, 20, 30);

    this.plug(observable);
  }
}
