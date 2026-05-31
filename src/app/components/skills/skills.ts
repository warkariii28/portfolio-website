import { Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = SKILLS;
}