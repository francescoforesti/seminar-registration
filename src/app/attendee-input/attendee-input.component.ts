import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attendee} from '../model/model';

@Component({
  selector: 'attendee-input',
  templateUrl: './attendee-input.component.html',
  styleUrls: ['./attendee-input.component.css']
})
export class AttendeeInputComponent {

  @Input() public id: string;
  @Input() public index: number;
  @Input() public attendee: Attendee;
  @Output() public nameChanged: EventEmitter<void> = new EventEmitter();

  onNameChanged() {
    this.nameChanged.emit();
  }
}
