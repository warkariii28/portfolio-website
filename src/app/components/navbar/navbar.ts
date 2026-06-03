import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme';
import { HERO, NAV_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = 'hero';
  hero = HERO;
  navLinks = NAV_LINKS;

  constructor(public themeService: ThemeService) {}

  getSectionId(anchor: string): string {
    return anchor.replace('#', '');
  }

  closeMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector<HTMLButtonElement>('.navbar-toggler');

    menu?.classList.remove('show');
    toggle?.setAttribute('aria-expanded', 'false');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['hero', ...this.navLinks.map((link) => this.getSectionId(link.anchor))];

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
