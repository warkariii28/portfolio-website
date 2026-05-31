import { Component } from '@angular/core';
import { HERO } from '../../data/portfolio.data';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  hero = HERO;
}