import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import { CardListComponent } from './card/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    NavbarComponent,
    CardItemComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
