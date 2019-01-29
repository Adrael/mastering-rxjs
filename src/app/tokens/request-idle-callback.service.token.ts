import {InjectionToken} from '@angular/core';
import {IRequestIdleCallbackService} from '../interfaces/request-idle-callback.service.interface';

export const I_REQUEST_IDLE_CALLBACK_SERVICE = new InjectionToken<IRequestIdleCallbackService>('IRequestIdleCallbackService');
