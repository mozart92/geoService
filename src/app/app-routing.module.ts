import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Pages/public/home/home.component";
import {DetailElementComponent} from "./Pages/public/detail-element/detail-element.component";
import { SessionUsersComponent } from './Pages/prive/session-users/session-users.component';
import { DashBoardComponent } from './Pages/prive/session-users/dash-board/dash-board.component';
import { ChangePasswordComponent } from './Pages/prive/session-users/change-password/change-password.component';
import { AddArticlesComponent } from './Pages/prive/session-users/add-articles/add-articles.component';
import { MyListingPosteComponent } from './Pages/prive/session-users/my-listing-poste/my-listing-poste.component';
import { EditeProfileComponent } from './Pages/prive/session-users/edite-profile/edite-profile.component';
import { AuthentificationUserComponent } from './Pages/public/authentification-user/authentification-user.component';
import { ListUserSaveComponent } from './Pages/prive/session-users/list-user-save/list-user-save.component';
import { ReviewsComponent } from './Pages/prive/session-users/reviews/reviews.component';
import { DetailsAgentComponent } from './Pages/public/details-agent/details-agent.component';
import { ContactUsComponent } from './Pages/public/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch:"full"
  },
  // voic la redirection vers le module de base de routage
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "detail",
    component: DetailElementComponent
  },
  {
    path: "register-user",
    component: AuthentificationUserComponent
  },
  {
    path: "detail-abonne",
    component: DetailsAgentComponent
  },
  {
    path: "contact-nous",
    component: ContactUsComponent
  },
  {
    path: "user",
    component: SessionUsersComponent,
    children: [
      {
        path: "dashboard",
        component: DashBoardComponent
      },
      {
        path: "change-password",
        component: ChangePasswordComponent
      },
      {
        path: "add-service",
        component: AddArticlesComponent
      },
      {
        path: "listing-post",
        component: MyListingPosteComponent
      },
      {
        path: "edite-profile",
        component: EditeProfileComponent
      },
      {
        path: "agent",
        component: ListUserSaveComponent
      },
      {
        path: "reviews",
        component: ReviewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
