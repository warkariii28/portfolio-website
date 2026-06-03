import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PUBLICATIONS } from '../../data/portfolio.data';

@Component({
  selector: 'app-publications',
  imports: [RouterLink],
  templateUrl: './publications.html',
  styleUrl: './publications.css'
})
export class Publications {
  publications = PUBLICATIONS;
}
