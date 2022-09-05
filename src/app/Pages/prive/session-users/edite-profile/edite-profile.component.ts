import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-edite-profile',
  templateUrl: './edite-profile.component.html',
  styleUrls: ['./edite-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditeProfileComponent implements OnInit {

  tilte = "Informations sur votre profile et mise a jour"
  constructor() { }

  ngOnInit(): void {
  }


}
