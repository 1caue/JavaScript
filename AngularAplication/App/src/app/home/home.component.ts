import { Component, DoCheck, OnDestroy, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { UserService } from '../_components/_services/user.service';
import { User } from '../_models/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService) {

  }
  
  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser() {
    this.userService.getGitUser('facebook').subscribe({
        next: (response: User) => {
            this.user = response;
            
            console.log('API Object:', response); // Verifica o retorno
            
        },
        error: (error) => {
            console.error('API Error:', error); // Captura erros
        },
    });
}
}
