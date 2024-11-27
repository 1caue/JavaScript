import { Component, DoCheck, OnDestroy, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { UserService } from '../_components/_services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  
  constructor(private userService: UserService) {

  }
  
  ngOnInit(): void {
    this.getGitUser();
  }

  async getGitUser() {
    try {
      const response = await this.userService.getGitUser('facebook').toPromise();
      return console.log('Response:', response);
    } catch (error) {
      return console.error('Error:', error);
    }
  }
}