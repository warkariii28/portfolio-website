import { Component } from '@angular/core';
import { ABOUT } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  about = ABOUT;
}