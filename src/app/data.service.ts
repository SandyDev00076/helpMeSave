import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private theList = new BehaviorSubject<Array<Item>>([]);
  constructor() { }

  getList() {
    return this.theList.asObservable();
  }

  editList(newList) {
    this.theList.next(newList);
  }
}
