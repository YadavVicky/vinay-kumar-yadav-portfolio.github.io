import { Component, OnInit } from '@angular/core';
import { mapTo } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  startingDate: Date = new Date(2021,6,22)
  exp = 0;
  months: number = 0;
  year: number = 0;
  constructor() { }

  ngOnInit(): void {
    let curr_date = new Date()
    this.months = (curr_date.getFullYear()-this.startingDate.getFullYear())*12;
    this.months -= this.startingDate.getMonth();
    this.months += curr_date.getMonth();
    this.year = Math.floor(this.months/12);
    this.months = this.months%12
  }

}
