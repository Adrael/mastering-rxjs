import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../../components/base-page/base-page.component';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: [ './async-subject.component.scss' ]
})
export class AsyncSubjectComponent extends BasePageComponent implements IPageComponent {
  private asyncSubject: AsyncSubject<number>;

  public start(): void {
    super.start();

    this.asyncSubject = new AsyncSubject<number>();
    this.plug(this.asyncSubject);

    this.asyncSubject.next(0);
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);

    this.asyncSubject.complete();
  }
}
