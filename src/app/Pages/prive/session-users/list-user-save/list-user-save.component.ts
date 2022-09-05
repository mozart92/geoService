import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-user-save',
  templateUrl: './list-user-save.component.html',
  styleUrls: ['./list-user-save.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListUserSaveComponent implements OnInit {

  tilte = "Les abonnes enregistres"

  constructor() { }

  ngOnInit(): void {
  }

}
