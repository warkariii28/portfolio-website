import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;

  getBadgeClass(badge: string) {
    switch (badge) {
      case 'Published Research':
        return 'badge-pill badge-published';

      case 'Frontend':
        return 'badge-pill badge-frontend';

      case 'Backend':
        return 'badge-pill badge-backend';

      case 'Analytics':
        return 'badge-pill badge-analytics';

      default:
        return 'badge-pill badge-fullstack';
    }
  }

  featuredProject = PROJECTS.find((p) => p.featured);

  otherProjects = PROJECTS.filter((p) => !p.featured);
}
