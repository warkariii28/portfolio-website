import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experience = EXPERIENCE;
}