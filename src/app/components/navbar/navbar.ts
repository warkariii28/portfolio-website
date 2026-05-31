import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = 'hero';

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = [
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'publications',
      'education',
      'achievements',
      'contact',
    ];

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);

      if (!section) continue;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 250 && rect.bottom >= 250) {
        this.activeSection = sectionId;
        break;
      }
    }

    const scrollPosition = window.innerHeight + window.scrollY;

    const pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight - 50) {
      this.activeSection = 'contact';
    }
  }
}
