import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-listing-poste',
  templateUrl: './my-listing-poste.component.html',
  styleUrls: ['./my-listing-poste.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyListingPosteComponent implements OnInit {

  tilte = "Mes postes"

  constructor() { }

  ngOnInit(): void {
  }

}
