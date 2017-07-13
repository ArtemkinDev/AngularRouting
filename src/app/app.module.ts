import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule }   from './app-routing.module';


import { AppComponent }  from './app.component';
import { HomePageComponent }  from './home-page/home-page.component';
import { AboutUsComponent }  from './about-us/about-us.component';
import { ServicesComponent }  from './services/services.component';
import { PartnersComponent }  from './partners/partners.component';


@NgModule({
	imports:[ 
	BrowserModule,
	AppRoutingModule 
	],
	
	declarations: [ 
	AppComponent,
	HomePageComponent,
	AboutUsComponent,
	ServicesComponent,
	PartnersComponent
	],
	
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
