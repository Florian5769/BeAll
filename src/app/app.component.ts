import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ERP';
  isMaximized = false;
  route='';

  constructor(
    private cd :ChangeDetectorRef,
    private router : Router) {
      this.route = this.router.url;
      this.router.events.subscribe(val =>{
        if(val instanceof NavigationStart) {
          this.route = val.url;
        }
      })
  }

  closeApp() {
    const { remote } = window.require('electron');
    remote.getCurrentWindow().close()
  }

  maximizeApp() {
    const { remote } = window.require('electron');
    remote.getCurrentWindow().maximize()
    this.setMaximize(true)
  }
  unMaximizeApp() {
    const { remote } = window.require('electron');
    remote.getCurrentWindow().unmaximize()
    this.setMaximize(false)
  }
  reduceApp() {
    const { remote } = window.require('electron');
    remote.getCurrentWindow().minimize()
  }

  setMaximize(maximize: boolean){
    this.isMaximized = maximize;
    this.cd.detectChanges();
  }

  onMove(){
    const { remote } = window.require('electron');
   const event = remote.getCurrentWindow();

   event.on('move', () =>{
    if(remote.getCurrentWindow().isMaximized() === true) {this.setMaximize(true);}
    else this.setMaximize(false);
  })

  }

  ngOnInit() {
      this.onMove();
  }

}
