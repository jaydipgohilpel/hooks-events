import { Component, OnInit, Input,OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() data = '';

  constructor() {
    console.log('1. constructor call');
  }
  ngOnChanges(change:SimpleChange)
  {
    console.log('2. ngOnChanges() call  ->',change);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit() call  ');
  }
}
