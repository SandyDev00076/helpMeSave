import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { DataService } from '../data.service';
import { PriorityScale } from '../priority.enum';
import { PossessionStatus } from '../possessionStatus.enum';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @ViewChild('yesbut') yesButton: ElementRef;
  @ViewChild('nobut') noButton: ElementRef;

  deviceCost: string;
  deviceEmi: string;

  device = new Item();

  constructor(private renderer: Renderer2, private router: Router, private dataService: DataService) {
    this.device.emiAvailable = false;
  }

  ngOnInit() { }

  isEmiThere(status: boolean) {
    if(this.yesButton.nativeElement.checked) {
      // if yes EMI
      this.renderer.setStyle(document.getElementById('deviceemi'), 'display', 'block');
      this.device.emiAvailable = true;
    }

    if(this.noButton.nativeElement.checked) {
      // if no EMI
      this.renderer.setStyle(document.getElementById('deviceemi'), 'display', 'none');
      this.device.emiAvailable = false;
    }
  }

  goToDashboard() {
    this.router.navigateByUrl('');
  }

  addAnItem() {
    if(this.deviceEmi) this.device.emiMonthly = parseFloat(this.deviceEmi);
    else this.device.emiMonthly = -1;
    this.device.price = parseFloat(this.deviceCost);
    this.device.status = PossessionStatus.NotYetPlanned;

    this.dataService.addToList(this.device);
    this.router.navigateByUrl('');
  }

  getUrgency(evt: any) {
    switch(evt.target.value) {
      case 'Want it Now!': {
        this.device.priority = PriorityScale.Urgent;
      }
      break;
      case 'Must have it now!': {
        this.device.priority = PriorityScale.MustHave;
      }
      break;
      case 'Its good to have!': {
        this.device.priority = PriorityScale.GoodToHave;
      }
      break;
      case 'Anytime': {
        this.device.priority = PriorityScale.NotNow;
      }
      break;
    }
  }

}
