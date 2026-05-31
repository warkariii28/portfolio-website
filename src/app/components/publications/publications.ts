import { Component } from '@angular/core';
import { PUBLICATIONS } from '../../data/portfolio.data';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.html',
  styleUrl: './publications.css'
})
export class Publications {
  publications = PUBLICATIONS;
}