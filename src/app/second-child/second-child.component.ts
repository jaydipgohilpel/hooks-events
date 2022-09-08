import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
})
export class SecondChildComponent implements OnInit {
  constructor() { }
  cnt: any;
  no: number = 1;
  ngOnInit() {
    // console.log('3. ngOnInit() called for second componunt ');
    // this.cnt = setInterval(() => {
    //   this.no = this.no + 1;
    //   console.log("second component ->" + this.no);
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('9. ngOnDestroy() called second componunt Release');
    clearInterval(this.cnt);
  }
}
