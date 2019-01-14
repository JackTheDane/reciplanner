import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  isThin?: boolean;

  constructor() { }

  ngOnInit() {
  }

  getClasses() {
    return this.isThin
      ? 'header isThin'
      : 'header';
  }

}
