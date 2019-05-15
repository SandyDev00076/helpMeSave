import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @ViewChild('yesbut') yesButton: ElementRef;
  @ViewChild('nobut') noButton: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  isEmiThere(status: boolean) {
    
  }

}
