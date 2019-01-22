import {Component, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLightTheme = true;
  public hideHomeComponent = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.router
      .events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.hideHomeComponent = (event.urlAfterRedirects !== '/');
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
}
