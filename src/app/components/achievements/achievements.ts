import { Component } from '@angular/core';
import {
  ACHIEVEMENT_CARDS,
  ACHIEVEMENTS,
  CERTIFICATIONS,
  INTERESTS,
} from '../../data/portfolio.data';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements {
  achievements = ACHIEVEMENTS;
  achievementCards = ACHIEVEMENT_CARDS;
  certifications = CERTIFICATIONS;
  interests = INTERESTS;
}
