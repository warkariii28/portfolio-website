import { Component } from '@angular/core';
import { HERO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  hero = HERO;
}