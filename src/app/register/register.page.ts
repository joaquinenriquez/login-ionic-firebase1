import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private afs: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister() {
    const user =  await this.afs.onRegister(this.user);
    if (user) {
      console.log('Usuario creado!');
      this.router.navigateByUrl('/');
    }
  }

}
