import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  pageNumber = 1;

  @Input()
  query: string;

  @Input()
  numberOfResponses: number;

  @Input()
  isLoading: boolean;

  constructor () {}

  ngOnInit() {
  }

  public getRouterLink(pageDifference: number) {
    const pageToLinkTo = +this.pageNumber + pageDifference;
    let routerLink = '/page/' + pageToLinkTo;

    if ( this.query ) {
      routerLink = '/search/' + this.query + routerLink;
    }

    return routerLink;
  }

}
