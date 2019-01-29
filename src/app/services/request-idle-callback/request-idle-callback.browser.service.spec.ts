import {RequestIdleCallbackService} from './request-idle-callback.service';
import {NgZone} from '@angular/core';
import {TestBed} from '@angular/core/testing';

describe('RequestIdleCallbackService', () => {
  let cb;
  let service: RequestIdleCallbackService;
  let testValue;
  describe('requestIdleCallback', () => {
    beforeEach(() => {
      const doc = {
        defaultView: {
          requestIdleCallback: callback => {
            callback();
          },
        },
      };
      cb = () => {
        testValue = 'TEST';
      };
      const zone: NgZone = TestBed.get(NgZone);
      service = new RequestIdleCallbackService(zone, doc);
    });

    it('should execute callback method if requestIdleCallback in window', () => {
      service.requestIdleCallback(cb);
      expect(testValue).toBe('TEST');
    });
  });
});
