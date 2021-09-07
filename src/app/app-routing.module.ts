import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDetailsComponent } from './componnents/home-details/home-details.component';
import { HomeListComponent } from './componnents/home-list/home-list.component';
import { HomeComponent } from './componnents/home/home.component';
import { LoginComponent } from './componnents/login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomeComponent,
    children: [
                {path:"homeDetails", component:HomeDetailsComponent},
                {path:"homeList", component:HomeListComponent},

              ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
