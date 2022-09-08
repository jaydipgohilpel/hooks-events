import { Component, SimpleChange, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hooks-events';
  parentData = '';
  secondCompIsActive: boolean = true;
  keypress(val: string) {
    this.parentData = val;
  }
  buttonclick() {
    if (this.secondCompIsActive) {
      this.secondCompIsActive = false;
    } else {
      this.secondCompIsActive = true;
    }
  }

}
