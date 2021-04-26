import { Component, Input, OnInit } from '@angular/core';
import { DidYouKnewService } from 'src/app/api/providers/didYouKnew.service';

@Component({
  selector: 'app-view-dyk',
  templateUrl: './view-dyk.component.html',
  styleUrls: ['./view-dyk.component.scss']
})
export class ViewDykComponent implements OnInit {
  @Input() data: any;
  public action: Number;

  constructor(
    private Dyk: DidYouKnewService
  ) {
    this.action = 0;
  }
  
  ngOnInit() {
    console.log("dataViewDyk :", this.data);
  }

  modifyDyk = () => {
    this.action = 1
  }
  
  saveDyk = (id: string) => {
    let updateDyk: DidYouKnewService.UpdateDidYouKnew  = {
      id: id
    };
    console.log(id);
    this.Dyk.updateDidYouKnew(updateDyk)
    .toPromise()
    .then((res) => {
      console.log(res);
      this.action = 0;
    })
  }
}
