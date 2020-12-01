import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { AddProductsComponent } from './components/shop/add-products/add-products.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: 'add-products',
    component: AddProductsComponent
  },
  {
    path: '**',
    component: NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
