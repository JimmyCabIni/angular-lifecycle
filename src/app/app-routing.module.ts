import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'lifecycle',
  //   loadChildren: () => import('./products/products.module').then( m => m.ProductsModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: 'lifecycle'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
