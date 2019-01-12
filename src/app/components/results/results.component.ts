import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: [ './results.component.scss' ]
})
export class ResultsComponent {
  @Input() public results: Array<any> = [];
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
