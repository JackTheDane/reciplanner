import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-meter',
  templateUrl: './ranking-meter.component.html',
  styleUrls: ['./ranking-meter.component.scss']
})
export class RankingMeterComponent implements OnInit {

  @Input()
  social_rank: number;

  constructor() {
  }

  ngOnInit() {
  }

  getRank() {
    return Math.round( this.social_rank );
  }
}
