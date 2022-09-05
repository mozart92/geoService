import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashBoardComponent implements OnInit {

  tilte = "Tableau de baord"

  constructor() {  }

  ngOnInit(): void {
    
  }

}
