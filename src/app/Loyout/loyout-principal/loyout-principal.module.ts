import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyoutPrincipalRoutingModule } from './loyout-principal-routing.module';
import {LoyoutPrincipalComponent} from "./loyout-principal.component";
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../../Pages/public/home/home.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoyoutPrincipalRoutingModule
  ]
})
export class LoyoutPrincipalModule { }
