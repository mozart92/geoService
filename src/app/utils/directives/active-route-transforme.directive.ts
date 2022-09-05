import {Directive, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Directive({
  selector: '[activeRouteTransforme]'
})
export class ActiveRouteTransformeDirective {

  className: string = "user-profile-act";

  constructor(public el: ElementRef, public routerActive: ActivatedRoute, public router: Router) {
    let elementEventAction = this.el.nativeElement as HTMLElement;
    const currentUrl = router.url;
    const getValueHref = elementEventAction.getAttribute("href");
    if (getValueHref == currentUrl){
      if (this.checkElementExist(`${this.className}`)){
        elementEventAction.classList.remove(`${this.className}`);
        elementEventAction.classList.add(`${this.className}`);
      }else{
        elementEventAction.classList.add(`${this.className}`);
      }
    }else{
      if (this.checkElementExist(`${this.className}`)){
        elementEventAction.classList.remove(`${this.className}`);
      }
    }
  }

  checkElementExist(nameClass: string): boolean{
    let elementEventAction = this.el.nativeElement as HTMLElement;
    return elementEventAction.classList.contains(nameClass);
  }

}
