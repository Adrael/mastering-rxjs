import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  public hideHomeComponent = false;

  constructor(private readonly router: Router) {}

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
}
