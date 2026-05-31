import { Component } from '@angular/core';
import { ACHIEVEMENTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements {
  achievements = ACHIEVEMENTS;
}