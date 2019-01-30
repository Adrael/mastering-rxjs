import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BasePageComponent } from './components/base-page/base-page.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ExampleCodeComponent } from './components/example-code/example-code.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResultsComponent } from './components/results/results.component';
import { SignatureComponent } from './components/signature/signature.component';
import { FirstOrUntilComponent } from './pages/custom-operators/first-or-until/first-or-until.component';
import { TakeOrUntilComponent } from './pages/custom-operators/take-or-until/take-or-until.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { HomeComponent } from './pages/home/home.component';
import { BufferTimeComponent } from './pages/operators/buffer-time/buffer-time.component';
import { CatchErrorComponent } from './pages/operators/catch-error/catch-error.component';
import { CombineLatestComponent } from './pages/operators/combine-latest/combine-latest.component';
import { ConcatMapComponent } from './pages/operators/concat-map/concat-map.component';
import { ConcatComponent } from './pages/operators/concat/concat.component';
import { DebounceTimeComponent } from './pages/operators/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './pages/operators/distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './pages/operators/filter/filter.component';
import { FirstComponent } from './pages/operators/first/first.component';
import { FlatMapComponent } from './pages/operators/flat-map/flat-map.component';
import { ForkJoinComponent } from './pages/operators/fork-join/fork-join.component';
import { FromComponent } from './pages/operators/from/from.component';
import { LastComponent } from './pages/operators/last/last.component';
import { MapComponent } from './pages/operators/map/map.component';
import { MergeMapComponent } from './pages/operators/merge-map/merge-map.component';
import { MergeComponent } from './pages/operators/merge/merge.component';
import { OfComponent } from './pages/operators/of/of.component';
import { ReduceComponent } from './pages/operators/reduce/reduce.component';
import { ScanComponent } from './pages/operators/scan/scan.component';
import { ShareReplayComponent } from './pages/operators/share-replay/share-replay.component';
import { ShareComponent } from './pages/operators/share/share.component';
import { StartWithComponent } from './pages/operators/start-with/start-with.component';
import { SwitchMapComponent } from './pages/operators/switch-map/switch-map.component';
import { TakeUntilComponent } from './pages/operators/take-until/take-until.component';
import { TakeComponent } from './pages/operators/take/take.component';
import { TapComponent } from './pages/operators/tap/tap.component';
import { WithLatestFromComponent } from './pages/operators/with-latest-from/with-latest-from.component';
import { AnimationFrameSchedulerComponent } from './pages/schedulers/animation-frame-scheduler/animation-frame-scheduler.component';
import { AsapSchedulerComponent } from './pages/schedulers/asap-scheduler/asap-scheduler.component';
import { AsyncSchedulerComponent } from './pages/schedulers/async-scheduler/async-scheduler.component';
import { QueueSchedulerComponent } from './pages/schedulers/queue-scheduler/queue-scheduler.component';
import { AsyncSubjectComponent } from './pages/subjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './pages/subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './pages/subjects/replay-subject/replay-subject.component';
import { AngularComponent } from './pages/testing/angular/angular.component';
import { MarbleTestingComponent } from './pages/testing/marble-testing/marble-testing.component';
import { TestSchedulerComponent } from './pages/testing/test-scheduler/test-scheduler.component';
import { BaseCodeComponent } from './components/base-code/base-code.component';
import { SingleComponent } from './pages/patterns/single/single.component';
import {RequestIdleCallbackService} from './services/request-idle-callback/request-idle-callback.service';
import {I_REQUEST_IDLE_CALLBACK_SERVICE} from './tokens/request-idle-callback.service.token';
import { RouterLinkDirective } from './directives/router-link/router-link.directive';
import { PluckComponent } from './pages/operators/pluck/pluck.component';

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
    TestSchedulerComponent,
    ForkJoinComponent,
    BasePageComponent,
    ResultsComponent,
    ResourcesComponent,
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
    HomeComponent,
    EmptyComponent,
    FirstOrUntilComponent,
    TakeOrUntilComponent,
    MarbleTestingComponent,
    AngularComponent,
    BaseCodeComponent,
    SingleComponent,
    RouterLinkDirective,
    PluckComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      scrollPositionRestoration: 'top'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: I_REQUEST_IDLE_CALLBACK_SERVICE,
      useClass: RequestIdleCallbackService
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
