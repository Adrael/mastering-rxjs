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
import { OfComponent } from './components/operators/of/of.component';
import { MapComponent } from './components/operators/map/map.component';
import { ShareComponent } from './components/operators/share/share.component';
import { FilterComponent } from './components/operators/filter/filter.component';
import { FromComponent } from './components/operators/from/from.component';
import { TakeComponent } from './components/operators/take/take.component';
import { TakeUntilComponent } from './components/operators/take-until/take-until.component';
import { WithLatestFromComponent } from './components/operators/with-latest-from/with-latest-from.component';
import { CombineLatestComponent } from './components/operators/combine-latest/combine-latest.component';
import { ConcatComponent } from './components/operators/concat/concat.component';
import { MergeComponent } from './components/operators/merge/merge.component';
import { StartWithComponent } from './components/operators/start-with/start-with.component';
import { FirstComponent } from './components/operators/first/first.component';
import { LastComponent } from './components/operators/last/last.component';
import { SwitchMapComponent } from './components/operators/switch-map/switch-map.component';
import { ShareReplayComponent } from './components/operators/share-replay/share-replay.component';
import { BufferTimeComponent } from './components/operators/buffer-time/buffer-time.component';
import { ConcatMapComponent } from './components/operators/concat-map/concat-map.component';
import { ScanComponent } from './components/operators/scan/scan.component';
import { ReduceComponent } from './components/operators/reduce/reduce.component';
import { TapComponent } from './components/operators/tap/tap.component';
import { CatchErrorComponent } from './components/operators/catch-error/catch-error.component';
import { DebounceTimeComponent } from './components/operators/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './components/operators/distinct-until-changed/distinct-until-changed.component';
import { MergeMapComponent } from './components/operators/merge-map/merge-map.component';
import { FlatMapComponent } from './components/operators/flat-map/flat-map.component';
import { SignatureComponent } from './components/signature/signature.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';

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
    ExampleCodeComponent,
    OfComponent,
    MapComponent,
    ShareComponent,
    FilterComponent,
    FromComponent,
    TakeComponent,
    TakeUntilComponent,
    WithLatestFromComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    StartWithComponent,
    FirstComponent,
    LastComponent,
    SwitchMapComponent,
    ShareReplayComponent,
    BufferTimeComponent,
    ConcatMapComponent,
    ScanComponent,
    ReduceComponent,
    TapComponent,
    CatchErrorComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    MergeMapComponent,
    FlatMapComponent,
    SignatureComponent,
    HomePageComponent
  ],
  imports: [
    FormsModule,
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
