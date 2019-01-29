import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import capitalize from 'lodash-es/capitalize';
import {I_REQUEST_IDLE_CALLBACK_SERVICE} from '../../tokens/request-idle-callback.service.token';
import {IRequestIdleCallbackService} from '../../interfaces/request-idle-callback.service.interface';

declare const ga: any;

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirective implements OnInit {
  @Input() private routerLink: string;
  private routeDetails: { label?: string, category?: string } = {};

  constructor(private readonly elementRef: ElementRef,
              @Inject(I_REQUEST_IDLE_CALLBACK_SERVICE) private readonly requestIdleCallbackService: IRequestIdleCallbackService) {
  }

  public ngOnInit(): void {
    this.processRouteDetails();
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.requestIdleCallbackService.requestIdleCallback(() => this.sendAnalytics());
    });
  }

  private processRouteDetails(): void {
    const details = this.routerLink
      .split('/')
      .filter((value: string) => value.trim().length > 0);

    if (details.length === 0) {
      this.routeDetails.label = 'Root';
      this.routeDetails.category = 'Home';
      return;
    }

    if (details.length === 2) {
      this.routeDetails.label = details[1];
      this.routeDetails.category = capitalize(details[0]);
      return;
    }

    if (details.length === 3) {
      this.routeDetails.label = details[2];
      this.routeDetails.category = `${capitalize(details[0])} - ${capitalize(details[1])}`;
      return;
    }

    this.routeDetails.label = this.routerLink;
    this.routeDetails.category = 'Unknown link';
  }

  private sendAnalytics(): void {
    ga('send', 'event', {
      eventLabel: this.routeDetails.label,
      eventAction: 'click',
      eventCategory: this.routeDetails.category
    });
  }
}
