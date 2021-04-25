import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StepContainerComponent } from './step-container/step-container.component';
import { AttendeeInputComponent } from './attendee-input/attendee-input.component';
import {FormsModule} from '@angular/forms';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { StepTickComponent } from './step-tick/step-tick.component';
import { FadeComponent } from './animations/fade/fade.component';

@NgModule({
  declarations: [
    AppComponent,
    StepContainerComponent,
    AttendeeInputComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    StepTickComponent,
    FadeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
