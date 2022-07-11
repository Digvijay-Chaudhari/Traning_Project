import { Component, Input, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mediaSub:Subscription;
  devicexs:boolean;

  user = localStorage.getItem('userName');
  constructor(public mediaobserver: MediaObserver) { }


  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.devicexs = result.mqAlias === 'xs' ? true : false;
      })
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
  
 // @Input() devicexs:boolean;
}
