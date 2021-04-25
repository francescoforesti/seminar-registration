import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'fade-animation',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1',
          height: 'auto'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0',
          height: '0px'
        })
      ),
      transition('* => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('500ms ease-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FadeComponent {
  state: FadeState;
  private _show: boolean;
  get show() {
    return this._show;
  }
  @Input()
  set show(value: boolean) {
    if (value) {
      this._show = value;
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }

  animationDone(event: any) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this._show = false;
    }
  }
}
