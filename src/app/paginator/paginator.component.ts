import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  pageNumber;

  @Input()
  query: string;

  @Input()
  showNextPage: boolean;

  constructor () {}

  ngOnInit() {
    if (!this.pageNumber) {
      this.pageNumber = 1;
    }
  }

  public getRouterLink(pageDifference: number) {
    const pageToLinkTo = Number(this.pageNumber) + pageDifference;
    let routerLink = '/page/' + pageToLinkTo;

    if ( this.query ) {
      routerLink = '/search/' + this.query + routerLink;
    }

    return routerLink;
  }

}
