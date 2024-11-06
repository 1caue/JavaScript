import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './_components/user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/list', component: UsersComponent},
  {path: 'users/details', component: UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
