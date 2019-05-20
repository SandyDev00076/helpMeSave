import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subscription: any;
  itemList: Item[] = [];

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.getList().subscribe((data) => {
      this.itemList = data;
    });
  }

  addNew() {
    this.router.navigateByUrl('new');
  }

}
