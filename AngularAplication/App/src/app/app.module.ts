import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BaseuiComponent } from './_components/baseui/baseui.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './_components/user/user.component';
import { UserCardComponent } from './_components/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BaseuiComponent,
    UsersComponent,
    UserComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule // Adicionar aqui também
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
