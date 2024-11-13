import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: string[] = ['VIni', 'Julio', 'Larissa', 'Pedro'];
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
   this.initializeForm();
  }

  initializeForm () {
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
      console.log(this.userForm.value);
    }
    
  }

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
  ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }
}