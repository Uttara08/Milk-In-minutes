import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin123' &&this.password === '12345') {
      localStorage.setItem('isLoggedIn', 'true');
     // this.router.navigate(['/dairy-products-requests']);
      alert('successfully logedin');
      this.router.navigateByUrl('dairy-products-requests');
      //window.location.reload();
      //this.router.navigate(['/dairy-products-requests']);
    } else {
      alert('Invalid security code');
    }
  }
}