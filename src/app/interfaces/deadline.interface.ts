export interface IDeadline {
  didTimeout: boolean;
  timeRemaining(): number;
}
