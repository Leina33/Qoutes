import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Qoutes } from '../qoutes';


@Component({
  selector: 'app-qoutes-detail',
  templateUrl: './qoutes-detail.component.html',
  styleUrls: ['./qoutes-detail.component.css']
})
export class QoutesDetailComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();


  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Input() quote:Qoutes;

  constructor() { }

  ngOnInit() {
  }

}
