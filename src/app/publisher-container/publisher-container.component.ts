import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publisher-container',
  templateUrl: './publisher-container.component.html',
  styleUrls: ['./publisher-container.component.scss']
})
export class PublisherContainerComponent implements OnInit {

  constructor() { }
  
  @Input()
  publisher: string;
  
  @Input()
  source_url: string;
  
  @Input()
  publisher_url: string;


  ngOnInit() {
  }

}
