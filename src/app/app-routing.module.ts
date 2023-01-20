import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/components/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/components/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/native/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./pages/native/flash/flash.module').then( m => m.FlashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
