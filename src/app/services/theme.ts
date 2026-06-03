import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private platformId = inject(PLATFORM_ID);

  private darkMode = true;

  constructor() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const saved = localStorage.getItem('theme');

    if (saved === 'light') {

      this.darkMode = false;

      document.body.classList.add('light-theme');

    }

  }

  toggleTheme() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.darkMode = !this.darkMode;

    if (this.darkMode) {

      document.body.classList.remove('light-theme');

      localStorage.setItem('theme', 'dark');

    } else {

      document.body.classList.add('light-theme');

      localStorage.setItem('theme', 'light');

    }

  }

  isDarkMode() {
    return this.darkMode;
  }

}