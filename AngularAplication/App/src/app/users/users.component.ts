import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { UserService } from '../_components/_services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    standalone: false
})
export class UsersComponent implements OnInit {
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});
  users: User[] = [
    { nome: 'Vini', idade: 25 },
    { nome: 'Julio', idade: 22 },
    { nome: 'Larissa', idade: 20 },
    { nome: 'Pedro', idade: 19 },
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: [
        '', 
        [Validators.required, Validators.min(12), Validators.max(110)]
      ],
    });
  }

  SubmitForm() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value); 
      this.userForm.reset();
      console.log(this.userForm.value);
    }
  }

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
    this.userService.setUser(user); 
  }
}
