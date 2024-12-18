import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    standalone: false
})
export class UserComponent implements OnInit {
  username: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getNome();
  }

  getNome() {
    this.route.queryParamMap.subscribe((params) => {
      this.username = params.get('username');
    });
  }
}
