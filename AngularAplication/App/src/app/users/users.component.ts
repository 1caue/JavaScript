import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: string[] = [
    'VIni',
    'Julio',
    'Larissa'
  ];
}
