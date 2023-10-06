import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailsSpecComponent} from "./components/product-details-spec/product-details-spec.component";
import {
  ProductDetailsOverviewComponent
} from "./components/product-details-overview/product-details-overview.component";

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {
    path: 'products/:id', component: ProductsComponent, children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'spec', component: ProductDetailsSpecComponent},
      {path: 'overview', component: ProductDetailsOverviewComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
