import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publisher-container',
  templateUrl: './publisher-container.component.html',
  styleUrls: ['./publisher-container.component.scss']
})

export class PublisherContainerComponent {
  
  @Input()
  publisher: string;
  
  @Input()
  source_url: string;
  
  @Input()
  publisher_url: string;

  @Input()
  image_size: number;

  @Input()
  recipePageLayot = false;

  noImgUrl = false;

  getAvatarImage(): string {
    return !this.noImgUrl
      ? '//logo.clearbit.com/' + this.publisher_url + '?size=' + this.image_size
      : 'assets/images/avatar.jpg';
  }

  getStandardAvatar(): void {
    if (!this.noImgUrl) {
      this.noImgUrl = true;
    }
  }

  getClass(): string {
    return !this.recipePageLayot
      ? 'publisher-container'
      : 'publisher-container pageLayout';
  }
}
