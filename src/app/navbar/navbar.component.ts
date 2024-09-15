import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    isLoggedIn: boolean = false;
    constructor(private router: Router) { 
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
    }
  
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false;
      this.router.navigate(['/']);
      alert('Do you want to logout')
    }
}
