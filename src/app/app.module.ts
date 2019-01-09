import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {AsyncSubjectComponent} from './components/subjects/async-subject/async-subject.component';
import {APP_ROUTES} from './app.routes';
import {BehaviorSubjectComponent} from './components/subjects/behavior-subject/behavior-subject.component';
import {ReplaySubjectComponent} from './components/subjects/replay-subject/replay-subject.component';
import {AsyncSchedulerComponent} from './components/schedulers/async-scheduler/async-scheduler.component';
import {QueueSchedulerComponent} from './components/schedulers/queue-scheduler/queue-scheduler.component';
import {AsapSchedulerComponent} from './components/schedulers/asap-scheduler/asap-scheduler.component';
import {AnimationFrameSchedulerComponent} from './components/schedulers/animation-frame-scheduler/animation-frame-scheduler.component';
import {VirtualTimeSchedulerComponent} from './components/schedulers/virtual-time-scheduler/virtual-time-scheduler.component';
import {TestSchedulerComponent} from './components/schedulers/test-scheduler/test-scheduler.component';
import {ForkJoinComponent} from './components/operators/fork-join/fork-join.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSchedulerComponent,
    QueueSchedulerComponent,
    AsapSchedulerComponent,
    AnimationFrameSchedulerComponent,
    VirtualTimeSchedulerComponent,
    TestSchedulerComponent,
    ForkJoinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
