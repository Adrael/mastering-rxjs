export interface IMenuItem {
  name: string;
  link: string;
}

export interface IMenuCategory {
  name: string;
  link: string;
  items: Array<IMenuItem>;
}

export const menuCategories: Array<IMenuCategory> = [
  {
    name: 'Subjects',
    link: '/subjects/',
    items: [
      {
        name: 'AsyncSubject',
        link: 'async'
      },
      {
        name: 'BehaviorSubject',
        link: 'behavior'
      },
      {
        name: 'ReplaySubject',
        link: 'replay'
      }
    ]
  },

  {
    name: 'Schedulers',
    link: '/schedulers/',
    items: [
      {
        name: 'animationFrame',
        link: 'animationFrame'
      },
      {
        name: 'asap',
        link: 'asap'
      },
      {
        name: 'async',
        link: 'async'
      },
      {
        name: 'queue',
        link: 'queue'
      }
    ]
  },

  {
    name: 'Testing',
    link: '/testing/',
    items: [
      {
        name: 'Marble',
        link: 'marble'
      },
      {
        name: 'TestScheduler',
        link: 'test'
      },
      {
        name: 'VirtualTimeScheduler',
        link: 'virtualTime'
      },
      {
        name: 'fakeAsync / tick',
        link: 'fakeAsyncTick'
      },
      {
        name: 'Marble',
        link: 'marble'
      }
    ]
  },

  {
    name: 'Operators',
    link: '/operators/',
    items: [
      {
        name: 'bufferTime',
        link: 'bufferTime'
      },
      {
        name: 'catchError',
        link: 'catchError'
      },
      {
        name: 'combineLatest',
        link: 'combineLatest'
      },
      {
        name: 'concat',
        link: 'concat'
      },
      {
        name: 'concatMap',
        link: 'concatMap'
      },
      {
        name: 'debounceTime',
        link: 'debounceTime'
      },
      {
        name: 'distinctUntilChanged',
        link: 'distinctUntilChanged'
      },
      {
        name: 'filter',
        link: 'filter'
      },
      {
        name: 'first',
        link: 'first'
      },
      {
        name: 'flatMap',
        link: 'flatMap'
      },
      {
        name: 'forkJoin',
        link: 'forkJoin'
      },
      {
        name: 'from',
        link: 'from'
      },
      {
        name: 'last',
        link: 'last'
      },
      {
        name: 'map',
        link: 'map'
      },
      {
        name: 'merge',
        link: 'merge'
      },
      {
        name: 'mergeMap',
        link: 'mergeMap'
      },
      {
        name: 'of',
        link: 'of'
      },
      {
        name: 'reduce',
        link: 'reduce'
      },
      {
        name: 'scan',
        link: 'scan'
      },
      {
        name: 'share',
        link: 'share'
      },
      {
        name: 'shareReplay',
        link: 'shareReplay'
      },
      {
        name: 'startWith',
        link: 'startWith'
      },
      {
        name: 'switchMap',
        link: 'switchMap'
      },
      {
        name: 'take',
        link: 'take'
      },
      {
        name: 'takeUntil',
        link: 'takeUntil'
      },
      {
        name: 'tap',
        link: 'tap'
      },
      {
        name: 'withLatestFrom',
        link: 'withLatestFrom'
      }
    ]
  },

  {
    name: 'Custom operators',
    link: '/operators/custom/',
    items: [
      {
        name: 'firstOrUntil',
        link: 'firstOrUntil'
      },
      {
        name: 'takeOrUntil',
        link: 'takeOrUntil'
      }
    ]
  },
];
