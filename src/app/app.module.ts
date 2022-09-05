import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoyoutPrincipalComponent} from "./Loyout/loyout-principal/loyout-principal.component";
import {HeaderComponent} from "./Loyout/header/header.component";
import {HomeComponent} from "./Pages/public/home/home.component";
import { SessionUsersComponent } from './Pages/prive/session-users/session-users.component';
import { SideBarComponent } from './Pages/prive/component/side-bar/side-bar.component';
import { AddArticlesComponent } from './Pages/prive/session-users/add-articles/add-articles.component';
import { EditeProfileComponent } from './Pages/prive/session-users/edite-profile/edite-profile.component';
import { ChangePasswordComponent } from './Pages/prive/session-users/change-password/change-password.component';
import { MyListingPosteComponent } from './Pages/prive/session-users/my-listing-poste/my-listing-poste.component';
import { BarProfileComponent } from './Pages/prive/component/bar-profile/bar-profile.component';
import { DashBoardComponent } from './Pages/prive/session-users/dash-board/dash-board.component';
import { ListUserSaveComponent } from './Pages/prive/session-users/list-user-save/list-user-save.component';
import { ReviewsComponent } from './Pages/prive/session-users/reviews/reviews.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsComponent } from './Pages/public/composant/google-maps/google-maps.component';
import { BarNavigatePrivateComponent } from './Pages/public/composant/bar-navigate-private/bar-navigate-private.component';
import { DetailElementComponent } from './Pages/public/detail-element/detail-element.component';
import { DetailsAgentComponent } from './Pages/public/details-agent/details-agent.component';
import { ActiveRouteTransformeDirective } from './utils/directives/active-route-transforme.directive';
import { BlocContactComponent } from './Composant/bloc-contact/bloc-contact.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent,
     HeaderComponent,
     HomeComponent,
     SessionUsersComponent,
     SideBarComponent,
     AddArticlesComponent,
     EditeProfileComponent,
     ChangePasswordComponent,
     MyListingPosteComponent,
     BarProfileComponent,
     DashBoardComponent,
     ListUserSaveComponent,
     GoogleMapsComponent,
     BarNavigatePrivateComponent,
     DetailElementComponent,
     DetailsAgentComponent,
     ReviewsComponent,
     ActiveRouteTransformeDirective,
     BlocContactComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
