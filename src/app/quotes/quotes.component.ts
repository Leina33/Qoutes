import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  qoutes: Qoutes []  = [
    new Qoutes(1, 'Yes you can ','Barack Obama'),
    new Qoutes(2, 'You will never walk alone ','Liverpool'),
    new Qoutes(3, 'No man is an island ','Annoymous'),
    // new Qoutes(4, 'karma is a bitch ','Annoymous'),
    // new Qoutes(5, "Choosing to be positive and having a grateful attitude is going to determine how you're going to live your life.",'Joel osteen'),
  ]
  toggleDetails(index){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
