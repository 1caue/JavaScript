import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // users: string[] = ['VIni', 'Julio', 'Larissa', 'Pedro'];
  users: User[] = [
    {
      nome: 'Vini',
      idade: 25
    },
    {
      nome: 'Julio',
      idade: 22
    },
    {
      nome: 'Larissa',
      idade: 20
    },
    {
      nome: 'Pedro',
      idade: 19
    }
  ]
}
//C:\Users\CAUÊ\Documents\JS\AngularAplication\App\src\app\_models\user.ts