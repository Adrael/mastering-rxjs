import {Component} from '@angular/core';

@Component({
  selector: 'app-base-code',
  templateUrl: './base-code.component.html',
  styleUrls: ['./base-code.component.scss']
})
export class BaseCodeComponent {
  public zoomedIn = false;

  public toggleZoom(): void {
    this.zoomedIn = !this.zoomedIn;
  }
}
