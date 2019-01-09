import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BasePageComponent } from './components/base-page/base-page.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ExampleCodeComponent } from './components/example-code/example-code.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ForkJoinComponent } from './components/operators/fork-join/fork-join.component';
import { ResultsComponent } from './components/results/results.component';
import { AnimationFrameSchedulerComponent } from './components/schedulers/animation-frame-scheduler/animation-frame-scheduler.component';
import { AsapSchedulerComponent } from './components/schedulers/asap-scheduler/asap-scheduler.component';
import { AsyncSchedulerComponent } from './components/schedulers/async-scheduler/async-scheduler.component';
import { QueueSchedulerComponent } from './components/schedulers/queue-scheduler/queue-scheduler.component';
import { TestSchedulerComponent } from './components/schedulers/test-scheduler/test-scheduler.component';
import { VirtualTimeSchedulerComponent } from './components/schedulers/virtual-time-scheduler/virtual-time-scheduler.component';
import { AsyncSubjectComponent } from './components/subjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './components/subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/subjects/replay-subject/replay-subject.component';

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
    ForkJoinComponent,
    BasePageComponent,
    ResultsComponent,
    HeaderComponent,
    DocumentationComponent,
    ExampleCodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: 'top'
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
