import {Component} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-base-code',
  templateUrl: './base-code.component.html',
  styleUrls: ['./base-code.component.scss']
})
export class BaseCodeComponent {
  public zoomFactor = 1;

  constructor(private readonly domSanitizer: DomSanitizer) {
  }

  public get zoomStyle(): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(`font-size: ${this.zoomFactor}rem;`);
  }

  public zoomIn(): void {
    this.zoomFactor += .1;
  }

  public zoomOut(): void {
    this.zoomFactor -= .1;
  }
}
