import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../../components/base-page/base-page.component';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent extends BasePageComponent implements IPageComponent {
  private replaySubject: ReplaySubject<number>;

  public start(): void {
    super.start();

    this.replaySubject = new ReplaySubject<number>(2);

    this.replaySubject.next(0);
    this.replaySubject.next(1);
    this.plug(this.replaySubject, 'First');
    this.replaySubject.next(2);
    this.plug(this.replaySubject, 'Second');
    this.replaySubject.next(3);
    this.plug(this.replaySubject, 'Third');
  }
}
