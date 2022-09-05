import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyout-principal',
  templateUrl: './loyout-principal.component.html',
  styleUrls: ['./loyout-principal.component.scss']
})
export class LoyoutPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts()
  }

  // Method to dynamically load JavaScript
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/load.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
