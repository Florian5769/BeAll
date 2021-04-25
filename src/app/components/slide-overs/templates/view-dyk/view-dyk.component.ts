import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dyk',
  templateUrl: './view-dyk.component.html',
  styleUrls: ['./view-dyk.component.scss']
})
export class ViewDykComponent implements OnInit {
  @Input() data: any;
  public action: Number;

  constructor() {
    this.action = 0;
  }
  
  ngOnInit() {
    console.log("dataViewDyk :", this.data);
  }

  modifyDyk = () => {
    this.action = 1;
  }

  saveDyk = () => {
    this.action = 0;
  }
}
