import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./Components/Landing/home/home.component";
import {UploadComponent} from "./Components/Landing/upload/upload.component";
import {ProductsComponent} from "./Components/Landing/products/products.component";
import {CheckoutpageComponent} from "./Components/Checkout/checkoutpage/checkoutpage.component";
import {ProductsAllComponent} from "./Components/Product/products-all/products-all.component";
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Components/register/register.component";


const routes: Routes = [{
  path: '', component: HomeComponent
},
  {path: 'sell', component: UploadComponent},
  {path: 'products', component: ProductsAllComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'checkout', component: CheckoutpageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
