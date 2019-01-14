import {Component} from '@angular/core';
import {BasePageComponent} from '../../../components/base-page/base-page.component';
import {IPageComponent} from '../../../interfaces/page-component.interface';
import {of} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent extends BasePageComponent implements IPageComponent {
  public start(): void {
    super.start();

    interface Person {
      age: number;
      name: string;
    }

    const observable = of<Person>(
      {age: 4, name: 'Foo'},
      {age: 7, name: 'Bar'},
      {age: 5, name: 'Foo'},
      {age: 6, name: 'Foo'},
    ).pipe(
      distinctUntilChanged((a: Person, b: Person) => a.name === b.name),
    );

    this.plug(observable);
  }
}
