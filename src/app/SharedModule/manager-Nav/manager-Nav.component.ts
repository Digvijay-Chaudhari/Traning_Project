import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-Nav',
  templateUrl: './manager-Nav.component.html',
  styleUrls: ['./manager-Nav.component.css']
})
export class ManagerNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user:string='Shubham';
}
