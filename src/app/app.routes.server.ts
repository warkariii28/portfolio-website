import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
    ],
  },
  {
    path: 'publications/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: 'truevision' },
    ],
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
