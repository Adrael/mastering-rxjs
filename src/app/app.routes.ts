import {Route} from '@angular/router';
import {AsyncSubjectComponent} from './components/subjects/async-subject/async-subject.component';
import {BehaviorSubjectComponent} from './components/subjects/behavior-subject/behavior-subject.component';
import {ReplaySubjectComponent} from './components/subjects/replay-subject/replay-subject.component';
import {AsyncSchedulerComponent} from './components/schedulers/async-scheduler/async-scheduler.component';
import {QueueSchedulerComponent} from './components/schedulers/queue-scheduler/queue-scheduler.component';
import {AsapSchedulerComponent} from './components/schedulers/asap-scheduler/asap-scheduler.component';
import {AnimationFrameSchedulerComponent} from './components/schedulers/animation-frame-scheduler/animation-frame-scheduler.component';
import {VirtualTimeSchedulerComponent} from './components/schedulers/virtual-time-scheduler/virtual-time-scheduler.component';
import {TestSchedulerComponent} from './components/schedulers/test-scheduler/test-scheduler.component';
import {ForkJoinComponent} from './components/operators/fork-join/fork-join.component';
import {BufferTimeComponent} from './components/operators/buffer-time/buffer-time.component';
import {OfComponent} from './components/operators/of/of.component';
import {CatchErrorComponent} from './components/operators/catch-error/catch-error.component';
import {ShareReplayComponent} from './components/operators/share-replay/share-replay.component';
import {MergeComponent} from './components/operators/merge/merge.component';
import {ReduceComponent} from './components/operators/reduce/reduce.component';
import {ScanComponent} from './components/operators/scan/scan.component';
import {DistinctUntilChangedComponent} from './components/operators/distinct-until-changed/distinct-until-changed.component';
import {FilterComponent} from './components/operators/filter/filter.component';
import {TakeComponent} from './components/operators/take/take.component';
import {ConcatMapComponent} from './components/operators/concat-map/concat-map.component';
import {FromComponent} from './components/operators/from/from.component';
import {CombineLatestComponent} from './components/operators/combine-latest/combine-latest.component';
import {ConcatComponent} from './components/operators/concat/concat.component';
import {FirstComponent} from './components/operators/first/first.component';
import {SwitchMapComponent} from './components/operators/switch-map/switch-map.component';
import {TapComponent} from './components/operators/tap/tap.component';
import {FlatMapComponent} from './components/operators/flat-map/flat-map.component';
import {StartWithComponent} from './components/operators/start-with/start-with.component';
import {DebounceTimeComponent} from './components/operators/debounce-time/debounce-time.component';
import {WithLatestFromComponent} from './components/operators/with-latest-from/with-latest-from.component';
import {MapComponent} from './components/operators/map/map.component';
import {MergeMapComponent} from './components/operators/merge-map/merge-map.component';
import {ShareComponent} from './components/operators/share/share.component';
import {TakeUntilComponent} from './components/operators/take-until/take-until.component';
import {LastComponent} from './components/operators/last/last.component';
import {HomePageComponent} from './components/home-page/home-page.component';

export const APP_ROUTES: Array<Route> = [
  {
    path: '',
    component: HomePageComponent
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
        redirectTo: '/schedulers/async'
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
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];
