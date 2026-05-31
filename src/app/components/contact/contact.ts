import { Component } from '@angular/core';
import { HERO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  hero = HERO;
}