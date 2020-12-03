import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'paradas',
    loadChildren: () => import('./paradas/paradas.module').then( m => m.ParadasPageModule)
  },
  {
    path: 'indicadores',
    loadChildren: () => import('./indicadores/indicadores.module').then( m => m.IndicadoresPageModule)
  },
  {
    path: 'periodicidade',
    loadChildren: () => import('./periodicidade/periodicidade.module').then( m => m.PeriodicidadePageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'lote',
    loadChildren: () => import('./lote/lote.module').then( m => m.LotePageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'turnos',
    loadChildren: () => import('./turnos/turnos.module').then( m => m.TurnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
