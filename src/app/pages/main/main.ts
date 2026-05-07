import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main { }

bootstrapApplication(Main, {
  providers: [
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
});