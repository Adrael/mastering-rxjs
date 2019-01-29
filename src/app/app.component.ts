import {Component, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';
import isNil from 'lodash-es/isNil';
import capitalize from 'lodash-es/capitalize';
import {Title} from '@angular/platform-browser';

declare const ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLightTheme = false;
  public hideHomeComponent = false;
  private readonly defaultPageTitle = 'Mastering RxJS | A journey to higher grounds';

  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly router: Router,
              private readonly title: Title) {
  }

  public ngOnInit(): void {
    this.router
      .events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.hideHomeComponent = (event.urlAfterRedirects !== '/');

        this.sendAnalytics(event.urlAfterRedirects);
        this.updatePageTitle(event.urlAfterRedirects);
      });
  }

  public applyLightTheme(): void {
    this.isLightTheme = true;

    // Baaaad, but it's just a demo so it's OK I guess...
    this.document.body.classList.remove('prism-dark');
    this.document.body.classList.add('prism-light');
  }

  public applyDarkTheme(): void {
    this.isLightTheme = false;

    // Baaaad, but it's just a demo so it's OK I guess...
    this.document.body.classList.remove('prism-light');
    this.document.body.classList.add('prism-dark');
  }

  private updatePageTitle(url: string): void {
    const details = url
      .split('/')
      .filter((value: string) => value.trim().length > 0);

    if (details.length === 2) {
      return this.title.setTitle(`${details[1]} | ${capitalize(details[0])} | ${this.defaultPageTitle}`);
    }

    if (details.length === 3) {
      return this.title
        .setTitle(`${details[2]} | ${capitalize(details[0])} | ${capitalize(details[1])} | ${this.defaultPageTitle}`);
    }

    this.title.setTitle(this.defaultPageTitle);
  }

  private sendAnalytics(url: string): void {
    if (ga && !isNil(ga)) {
      ga('send', 'pageview', url);
    }
  }
}
