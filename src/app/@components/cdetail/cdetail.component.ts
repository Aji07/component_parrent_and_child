import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cdetail',
  templateUrl: './cdetail.component.html',
  styleUrls: ['./cdetail.component.scss']
})
export class CdetailComponent implements OnInit {

  @Input() details: any;
  @Input() title: any;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


  constructor() { }
  nextcourse(){

  }

  ngOnInit(): void {
  }

}
