import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';




const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'park1', loadChildren: './pages/park1/park1.module#Park1PageModule' },
  { path: 'matches', loadChildren: './pages/matches/matches.module#MatchesPageModule' },
  { path: 'link', loadChildren: './pages/link/link.module#LinkPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
