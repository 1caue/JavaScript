import { Component, DoCheck, OnDestroy, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { UserService } from '../_components/_services/user.service';
import { firstValueFrom } from 'rxjs';

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

  getGitUser() {
    this.userService.getGitUser('mrtrycatch').subscribe(
      (response) => {
        console.log('Response in Component:', response); // Aqui, você verá o objeto retornado.
      },
      (error) => {
        console.error('Error:', error); // Trate erros de forma adequada.
      }
    );
  }
}