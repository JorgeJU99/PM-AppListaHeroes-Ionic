import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/heroes/heroes.module').then((m) => m.HeroesPageModule),
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    children: [
      {
        path: 'detalle-heroe/:id',
        loadChildren: () =>
          import('./pages/detalle-heroe/detalle-heroe.module').then(
            (m) => m.DetalleHeroePageModule
          ),
      },
    ],
  },
  {
    path: 'add-heroe',
    loadChildren: () =>
      import('./pages/add-heroe/add-heroe.module').then(
        (m) => m.AddHeroePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
