import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../_components/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponen implements OnInit {
  
  constructor(private userService: UserService) {

  }
  
  ngOnInit(): void {
    
  }

  getGitUser () {
    this.userService.getGitUser('facebook')
  }
}
