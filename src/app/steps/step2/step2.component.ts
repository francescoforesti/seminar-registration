import {Component, ElementRef, Input, QueryList, ViewChildren} from '@angular/core';
import {AbstractStep} from '../abstract-step';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'step-2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component extends AbstractStep {

  @Input() enable: boolean;
  showAccommodationsInput: boolean;
  showBadgeInput: boolean;
  accommodationText: string;
  badgeText: string;
  step2Done = false;

  @ViewChildren('radio') radios: QueryList<ElementRef>;

  constructor() {
    super();
  }

  onCompanyNameOnBadges(value: boolean) {
    this.showBadgeInput = value;
    this.checkStepDone();
  }

  onSpecialAccommodations(value: boolean) {
    this.showAccommodationsInput = value;
    this.checkStepDone();
  }

  checkStepDone() {
    const badgeIsDone = (this.showBadgeInput != null && !this.showBadgeInput) || !!this.badgeText;
    const accommodationIsDone = (this.showAccommodationsInput != null && !this.showAccommodationsInput) || !!this.accommodationText;
    this.step2Done = accommodationIsDone && badgeIsDone;
    if (this.step2Done) {
      this.done.emit();
    }
  }

  reset(): void {
    this.showAccommodationsInput = null;
    this.showBadgeInput = null;
    this.accommodationText = null;
    this.badgeText = null;
    this.step2Done = false;
    this.radios.map(r => r.nativeElement).forEach(n => n.checked = false);
  }
}
