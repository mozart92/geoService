import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddArticlesComponent implements OnInit {

  tilte = "Ajouter un poste"

  constructor() { }

  ngOnInit(): void {
  }

}
