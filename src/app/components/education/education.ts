import { Component } from '@angular/core';
import { EDUCATION } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  education = EDUCATION;
}