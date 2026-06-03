import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { PublicationDetail } from './pages/publication-detail/publication-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/:id', component: ProjectDetail },
  { path: 'publications/:id', component: PublicationDetail },
  { path: '**', redirectTo: '' },
];
