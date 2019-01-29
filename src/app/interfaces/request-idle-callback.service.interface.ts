export interface IRequestIdleCallbackService {
  cancelIdleCallback(handler): void;
  requestIdleCallback(callback): void;
}
