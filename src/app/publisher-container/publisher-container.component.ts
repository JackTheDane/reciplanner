import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-publisher-container',
  templateUrl: './publisher-container.component.html',
  styleUrls: ['./publisher-container.component.scss']
})
export class PublisherContainerComponent {

  constructor() { }
  
  @Input()
  publisher: string;
  
  @Input()
  source_url: string;
  
  @Input()
  publisher_url: string;

  @Input()
  image_size: number;

  getAvatarImage() {
    return '//logo.clearbit.com/' + this.publisher_url + '?size=' + this.image_size;
  }

}
