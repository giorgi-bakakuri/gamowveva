import { Component, OnInit } from '@angular/core';
import { Card } from '../interface/card';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  printText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendchild: Card = {
    stars: 5,
    name: 'giorgi',
    date: 'axlandeli dro',
    declr: 'informacia ar aris',
    category: 'uketegorio',
    shefaseba: 'shefaseba: ',
    saxeli: 'saxeli: ',
    dro: 'tarighi: ',
    aghwera: 'informacia: ',
    kategoria: 'kategoria: ',
  }


  recieveFromChild($event: string){
    this.printText = $event;
  }

}
