import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PUBLICATIONS } from '../../data/portfolio.data';

@Component({
  selector: 'app-publication-detail',
  imports: [RouterLink],
  templateUrl: './publication-detail.html',
  styleUrl: './publication-detail.css',
})
export class PublicationDetail {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private publicationId = this.route.snapshot.paramMap.get('id');
  publication = PUBLICATIONS.find((item) => item.id === this.publicationId);
  safePdfUrl: SafeResourceUrl | null = this.publication?.localPdfUrl
    ? this.sanitizer.bypassSecurityTrustResourceUrl(this.publication.localPdfUrl)
    : null;
}
