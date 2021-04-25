import {Component, ViewChild} from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {AbstractStep} from './steps/abstract-step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'seminar-registration';

  public step1Done = false;
  public step2Done = false;

  @ViewChild('myForm') public theForm: NgForm;
  @ViewChild('step1') public step1: AbstractStep;
  @ViewChild('step2') public step2: AbstractStep;
  @ViewChild('step3') public step3: AbstractStep;

  public constructor() {
  }

  onStepDone(stepName: string) {
    switch (stepName) {
      case 'step1':
        this.step1Done = true;
        break;
      case 'step2':
        this.step2Done = true;
        break;
      case 'step3':
        this.theForm.reset();
        this.step1Done = false;
        this.step2Done = false;
        this.step1.reset();
        this.step2.reset();
        this.step3.reset();
        break;
    }
  }
}
