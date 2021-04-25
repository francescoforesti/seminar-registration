import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {AbstractStep} from '../abstract-step';

@Component({
  selector: 'step-3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component extends AbstractStep {

  @Input() enable: boolean;
  readyToRock: boolean;

  @ViewChild('check') public check: ElementRef;

  constructor() {
    super();
  }

  submit() {
    this.done.emit();
  }

  onReadyToRock($event: any) {
    this.readyToRock = $event.target.checked;
  }

  reset(): void {
    this.readyToRock = false;
    this.check.nativeElement.checked = false;
  }
}
