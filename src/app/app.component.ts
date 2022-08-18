import { Component, SimpleChange, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hooks-events';
  parentData = '';
  second: boolean = true;
  keypress(val: string) {
    this.parentData = val;
  }
  buttonclick() {
    if (this.second) {
      this.second = false;
    } else {
      this.second = true;
    }
  }
}
