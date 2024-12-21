import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductsComponent } from './products/products.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutPageComponent,
    ProductsComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'home', component: HomepageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: '**', pathMatch: 'full',   component: HomepageComponent }
    ]),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
