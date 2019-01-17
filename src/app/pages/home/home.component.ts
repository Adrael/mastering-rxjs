import {Component} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public width = 960;
  public height = 569;
  public isSlideFullScreen = false;

  public toggleFullScreenSlide(): void {
    this.isSlideFullScreen = !this.isSlideFullScreen;
  }
}
