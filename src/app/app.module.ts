import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesComponent } from './components/activities/activities.component'
import { CustomersComponent } from './components/customers/customers.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CustomersComponent,
    ProvidersComponent,
    ActivitiesComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // {path: '', component:HomeComponent},
      // {path: 'activities', component:ActivitiesComponent},
      // {path: 'sigesp', component:CustomersComponent},
      // {path: 'contact', component:ProvidersComponent},
      {path: '**', component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
