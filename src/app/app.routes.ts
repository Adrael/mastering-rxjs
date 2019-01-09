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

export const APP_ROUTES: Array<Route> = [
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
        path: 'forkJoin',
        component: ForkJoinComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/operators/forkJoin'
      }
    ]
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
];
