import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';
import { PossessionStatus } from '../possessionStatus.enum';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() itemObject: Item;
  itemDate: string = '';

  constructor() { }

  ngOnInit() {
    if (this.itemObject.status === PossessionStatus.NotYetPlanned) {
      this.itemDate = 'TBD';
    } else {
      // the logic goes here.
    }
  }

}
