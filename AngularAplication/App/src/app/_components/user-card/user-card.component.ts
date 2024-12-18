import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css'],
    standalone: false
})
export class UserCardComponent {
  @Input() user: User = {
    idade: 0,
    nome: '',
  }; 
 
  @Output() userInfoEmitter = new EventEmitter<User>();
    
    RetornarDados() {
      this.userInfoEmitter.emit(this.user);
    }
}