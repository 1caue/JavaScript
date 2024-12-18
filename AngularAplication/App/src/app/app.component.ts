import { Component, OnInit } from '@angular/core';
import { UserService } from './_components/_services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  ngOnInit(): void {
    this.getUser()
  }

  constructor(private userService: UserService) {}

  getUser() {
   const user = localStorage.getItem('user');
   this.userService.setUser(user ?  JSON.parse(user) : undefined);
  }
}
