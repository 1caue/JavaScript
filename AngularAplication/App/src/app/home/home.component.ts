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
    console.log('Initializing HomeComponent....')
  }

  getGitUser() {
    this.userService.getGitUser('facebook').subscribe({
        next: (response) => {
            console.log('API Object:', response); // Verifica o retorno
        },
        error: (error) => {
            console.error('API Error:', error); // Captura erros
        },
    });
}
}