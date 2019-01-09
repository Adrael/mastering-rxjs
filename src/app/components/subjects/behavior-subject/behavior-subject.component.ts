import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject } from 'rxjs';
import { IPageComponent } from '../../../interfaces/page-component.interface';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent extends BasePageComponent implements IPageComponent {
  private behaviorSubject: BehaviorSubject<number>;

  public start(): void {
    super.start();

    this.behaviorSubject = new BehaviorSubject<number>(null);
    this.plug(this.behaviorSubject);

    this.behaviorSubject.next(0);
    this.behaviorSubject.next(1);
    this.behaviorSubject.next(2);
    this.behaviorSubject.next(3);
  }
}
