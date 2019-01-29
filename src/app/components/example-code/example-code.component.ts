import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseCodeComponent } from '../base-code/base-code.component';

@Component({
  selector: 'app-example-code',
  templateUrl: './example-code.component.html',
  styleUrls: [ './example-code.component.scss' ]
})
export class ExampleCodeComponent extends BaseCodeComponent {
  private overlay: HTMLDivElement;

  public isFocused = false;

  constructor(private readonly renderer: Renderer2,
              private readonly elementRef: ElementRef,
              private readonly domSanitizerChild: DomSanitizer) {
    super(domSanitizerChild);
  }

  public toggleFocus(): void {
    this.isFocused = !this.isFocused;

    if (this.isFocused) {
      this.addOverlay();
    } else {
      this.removeOverlay();
    }
  }

  private addOverlay(): void {
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'code-overlay');
    this.renderer.appendChild(this.elementRef.nativeElement, this.overlay);
  }

  private removeOverlay(): void {
    this.renderer.removeChild(this.elementRef.nativeElement, this.overlay);
  }
}
