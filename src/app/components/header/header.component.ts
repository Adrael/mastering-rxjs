import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public category: string;
  @Input() public isRunning = false;

  @Output() private readonly onStop = new EventEmitter<void>();
  @Output() private readonly onStart = new EventEmitter<void>();

  public stop(): void {
    this.onStop.emit();
  }

  public start(): void {
    this.onStart.emit();
  }
}
