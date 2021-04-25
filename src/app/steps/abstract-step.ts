import {Directive, EventEmitter, Output} from '@angular/core';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class AbstractStep {

  @Output() public done: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  abstract reset(): void;
}
