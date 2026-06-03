import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private projectId = Number(this.route.snapshot.paramMap.get('id'));
  project = PROJECTS.find((item) => item.id === this.projectId);
}
