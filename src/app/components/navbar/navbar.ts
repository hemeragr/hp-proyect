import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {

  private router = inject(Router);

  get isHome(): boolean {
    return this.router.url === '/' || this.router.url === '/main';
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

}