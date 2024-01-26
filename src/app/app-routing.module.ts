import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './components/products/products.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'addCart', component: AddCartComponent },
  { path: 'details/:id', component: DetailsProductComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
  
]



@NgModule({
  
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
})
export class AppRoutingModule { }
