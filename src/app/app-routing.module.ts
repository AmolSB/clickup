import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'datatable',
    loadChildren: async () => (await import('./feature-modules/home/home.module')).HomeModule
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'datatable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
