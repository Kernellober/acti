import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teamler',
  standalone: true,
  imports: [],
  templateUrl: './teamler.component.html',
  styleUrls: ['./teamler.component.css']
})
export class TeamlerComponent implements OnInit {
  archived: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.data.subscribe((data) => {
      this.archived = data['archived'];
      console.log('Archived:', this.archived);
    });
  }
}