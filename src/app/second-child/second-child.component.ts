import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
})
export class SecondChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('8. ngOnDestroy() called second componunt Release');
  }
}
