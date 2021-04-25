import {Component, ElementRef, ViewChild} from '@angular/core';
import {Attendee, OnSelectAttendeesParams} from '../../model/model';
import {isNumeric} from 'rxjs/internal-compatibility';
import {AbstractStep} from '../abstract-step';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'step-1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        maxHeight: '500px',
        transition: 'max-height 0.5s ease'
      })),
      state('closed', style({
        maxHeight: '0px',
        transition: 'max-height 0.5s ease'
      }))
    ]),
  ]
})
export class Step1Component extends AbstractStep {

  constructor() {
    super();
  }

  public attendees: Attendee[] = [];
  noAttendees = true;
  step1Done = false;

  @ViewChild('attendeeSelect') select: ElementRef;

  public attendeesNumberOpts: OnSelectAttendeesParams[] = [{id: 'opt_0', label: 'Please Choose'}].concat(
    Array(5)
      .fill(1)
      .map((x, i) => {
        return {id: `opt_${i + 1}`, label: `${i + 1}`};
      })
  );

  onSelectAttendees(event: any) {
    const howManyAttendees = isNumeric(event.target.value) ? event.target.value : 0;
    this.noAttendees = true;
    setTimeout(() => {
      this.attendees.length = 0;
      for (let i = 0; i < howManyAttendees; i++) {
        this.attendees.push({} as Attendee);
      }
      this.noAttendees = howManyAttendees === 0;
      this.checkStepDone();
    }, 500); // allow the 'open => close' translation before the next 'close => open'
  }

  checkStepDone() {
    this.step1Done = this.attendees.length > 0 && !this.attendees.find(a => !a.name || a.name.length === 0);
    if (this.step1Done) {
      this.done.emit();
    }
  }

  reset(): void {
    this.attendees.length = 0;
    this.step1Done = false;
    this.noAttendees = true;
    this.select.nativeElement.selectedIndex = 0;
  }
}
