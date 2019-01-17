import { Route } from '@angular/router';
import { EmptyComponent } from './pages/empty/empty.component';
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
import { TestSchedulerComponent } from './pages/testing/test-scheduler/test-scheduler.component';
import { VirtualTimeSchedulerComponent } from './pages/testing/virtual-time-scheduler/virtual-time-scheduler.component';

export const APP_ROUTES: Array<Route> = [
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: 'subjects',
    children: [
      {
        path: 'async',
        component: AsyncSubjectComponent
      },
      {
        path: 'behavior',
        component: BehaviorSubjectComponent
      },
      {
        path: 'replay',
        component: ReplaySubjectComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/subjects/async'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/subjects/async'
      }
    ]
  },
  {
    path: 'schedulers',
    children: [
      {
        path: 'async',
        component: AsyncSchedulerComponent
      },
      {
        path: 'queue',
        component: QueueSchedulerComponent
      },
      {
        path: 'asap',
        component: AsapSchedulerComponent
      },
      {
        path: 'animationFrame',
        component: AnimationFrameSchedulerComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/schedulers/animationFrame'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/schedulers/animationFrame'
      }
    ]
  },
  {
    path: 'testing',
    children: [
      {
        path: 'virtualTime',
        component: VirtualTimeSchedulerComponent
      },
      {
        path: 'test',
        component: TestSchedulerComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/testing/test'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/testing/test'
      }
    ]
  },
  {
    path: 'operators',
    children: [
      {
        path: 'bufferTime',
        component: BufferTimeComponent
      },
      {
        path: 'catchError',
        component: CatchErrorComponent
      },
      {
        path: 'combineLatest',
        component: CombineLatestComponent
      },
      {
        path: 'concat',
        component: ConcatComponent
      },
      {
        path: 'concatMap',
        component: ConcatMapComponent
      },
      {
        path: 'debounceTime',
        component: DebounceTimeComponent
      },
      {
        path: 'distinctUntilChanged',
        component: DistinctUntilChangedComponent
      },
      {
        path: 'filter',
        component: FilterComponent
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'flatMap',
        component: FlatMapComponent
      },
      {
        path: 'forkJoin',
        component: ForkJoinComponent
      },
      {
        path: 'from',
        component: FromComponent
      },
      {
        path: 'last',
        component: LastComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'merge',
        component: MergeComponent
      },
      {
        path: 'mergeMap',
        component: MergeMapComponent
      },
      {
        path: 'of',
        component: OfComponent
      },
      {
        path: 'reduce',
        component: ReduceComponent
      },
      {
        path: 'scan',
        component: ScanComponent
      },
      {
        path: 'share',
        component: ShareComponent
      },
      {
        path: 'shareReplay',
        component: ShareReplayComponent
      },
      {
        path: 'startWith',
        component: StartWithComponent
      },
      {
        path: 'switchMap',
        component: SwitchMapComponent
      },
      {
        path: 'take',
        component: TakeComponent
      },
      {
        path: 'takeUntil',
        component: TakeUntilComponent
      },
      {
        path: 'tap',
        component: TapComponent
      },
      {
        path: 'withLatestFrom',
        component: WithLatestFromComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/operators/bufferTime'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/operators/bufferTime'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];
