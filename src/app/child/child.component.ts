import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() itemOfParent!: any;

  @Output() itemOfChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendItem(){
    this.itemOfChild.emit('es aris informacia wamoghebuli chaild componentidan');
  }

}
