import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-count',
  standalone: true,
  imports: [],
  templateUrl: './player-count.component.html',
  styleUrls: ['./player-count.component.css']
})
export class PlayerCountComponent implements OnInit {
  aggregate: string = "";

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.data.subscribe((data) => {
      this.aggregate = data['aggregate'];
      console.log('Aggregate:', this.aggregate);
    });
  }
}