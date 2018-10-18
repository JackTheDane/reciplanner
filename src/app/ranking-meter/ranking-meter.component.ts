import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-meter',
  templateUrl: './ranking-meter.component.html',
  styleUrls: ['./ranking-meter.component.scss']
})
export class RankingMeterComponent implements OnInit {

  @Input()
  social_rank: number;
  
  stars$: Array<number>;

  constructor() {
  }

  ngOnInit() {
    this.stars$ = this.getRankingStars();
  }

  getRankingStars() {
    const starFull = '<mat-icon>star_rate</mat-icon>';
    const rank = Math.round( this.social_rank );
    const returnArray: Array<number> = [];

    for (let i = 0; i < 100; i += 20) { // Loops five times

      if ( rank > i ) { // Checks if the rating is more than the current i value

        if ( rank <= (i + 10) ) { // If so, check if the rating is or is less than the i value + 10
          returnArray.push(0.5);
          continue;
        }

        returnArray.push(1);
        continue;
      }

      returnArray.push(0);
    }

    return returnArray;
  }

  getRank() {
    return Math.round( this.social_rank );
  }
}
