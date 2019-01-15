import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {from} from 'rxjs';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = from([1, 2, 3, 4, 5])
      .pipe(
        last((value: number) => value % 2 === 0)
      );

    this.plug(observable);
  }
}
