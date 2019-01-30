import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {from} from 'rxjs';
import {filter, pluck} from 'rxjs/operators';
import isNil from 'lodash-es/isNil';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    const observable = from([
      {name: 'Joe', age: 30, job: {title: 'Developer', language: 'JavaScript'}},
      {name: 'Sarah', age: 35}
    ])
      .pipe(
        pluck('job', 'title'),
        filter((job: string) => !isNil(job))
      );

    this.plug(observable);
  }
}
