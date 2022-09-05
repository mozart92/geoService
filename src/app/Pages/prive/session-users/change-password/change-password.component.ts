import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent implements OnInit {

  tilte = "Changer votre mot de passse"

  constructor() { }

  ngOnInit(): void {
  }

}
