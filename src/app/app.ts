import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Publications } from './components/publications/publications';
import { Education } from './components/education/education';
import { Achievements } from './components/achievements/achievements';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { AfterViewInit } from '@angular/core';
import { PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Sidebar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Publications,
    Education,
    Achievements,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    reveals.forEach((item) => observer.observe(item));
  }
}
