export interface IPageComponent {
  isRunning: boolean;

  stop(): void;

  start(): void;
}
