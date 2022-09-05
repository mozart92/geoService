import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoyoutPrincipalComponent} from "./loyout-principal.component";
import {HomeComponent} from "../../Pages/public/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: LoyoutPrincipalComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "detail",
        loadChildren: () => import("../../../../src/app/Pages/public/detail-element/detail-element.module").then(m => m.DetailElementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoyoutPrincipalRoutingModule { }
