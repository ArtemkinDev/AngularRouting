import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomePageComponent }  from './home-page/home-page.component';
import { AboutUsComponent }  from './about-us/about-us.component';
import { ServicesComponent }  from './services/services.component';
import { PartnersComponent }  from './partners/partners.component';

const routes:Routes = [
{ path:'', component:HomePageComponent },
{ path:'aboutUs', component:AboutUsComponent },
{ path:'services', component:ServicesComponent },
{ path:'partners', component:PartnersComponent },
{ path:'**', redirectTo:'/'},
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}