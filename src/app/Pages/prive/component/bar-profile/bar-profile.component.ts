import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-profile',
  templateUrl: './bar-profile.component.html',
  styleUrls: ['./bar-profile.component.css']
})
export class BarProfileComponent implements OnInit {

  @Input() tilte = "";

  constructor() { }

  ngOnInit(): void {
  }

}
