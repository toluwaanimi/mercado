import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavBarComponent } from './Components/Landing/nav-bar/nav-bar.component';
import { UploadComponent } from './Components/Landing/upload/upload.component';
import { HeroComponent } from './Components/Landing/hero/hero.component';
import { HomeComponent } from './Components/Landing/home/home.component';
import { RoundedComponent } from './Components/Landing/rounded/rounded.component';
import { SquareComponent } from './Components/Landing/square/square.component';
import { FooterComponent } from './Components/Landing/footer/footer.component';
import { ProductsComponent } from './Components/Landing/products/products.component';
import { TestimonyComponent } from './Components/Landing/testimony/testimony.component';
import { LogosComponent } from './Components/Landing/logos/logos.component';
import { CheckComponent } from './Components/Checkout/check/check.component';
import { CheckoutpageComponent } from './Components/Checkout/checkoutpage/checkoutpage.component';
import { DetailsPageComponent } from './Components/Product/details-page/details-page.component';
import { DetailsPageFIxComponent } from './Components/Product/details-page-fix/details-page-fix.component';
import { ProductsAllComponent } from './Components/Product/products-all/products-all.component';
import { ProductCardComponent } from './Components/Product/product-card/product-card.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    UploadComponent,
    HeroComponent,
    HomeComponent,
    RoundedComponent,
    SquareComponent,
    FooterComponent,
    ProductsComponent,
    TestimonyComponent,
    LogosComponent,
    CheckComponent,
    CheckoutpageComponent,
    DetailsPageComponent,
    DetailsPageFIxComponent,
    ProductsAllComponent,
    ProductCardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
