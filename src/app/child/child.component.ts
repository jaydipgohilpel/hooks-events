import { Component, OnInit, Input,  SimpleChange, DoCheck, AfterContentInit,AfterContentChecked ,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @Input() data = '';

  constructor() {
    console.log('1. constructor call for first child');
  }

  ngOnChanges(change: SimpleChange) {
    console.log('2. ngOnChanges() call  for first child->', change);
  }

  ngOnInit() {
    console.log('3. ngOnInit() call  for first child');
  }
  ngDoCheck() {
    console.log('4. ngDoCheck() call  for first child');
  }
  ngAfterContentInit() {
    console.log('5. ngAfterContentInit() call  for first child');
  }
  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked() call  ');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit() call  ');
  }
  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked() call  ');
  }



}
