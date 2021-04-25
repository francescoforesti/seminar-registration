import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.css']
})
export class StepContainerComponent {

  @Input() public id: string;
  @Input() public title: string;
  @Input() public classes: string;
  @Input() public disabled = false;
  @Input() public done = false;
}
