import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HomeModule, CabecalhoModule, RodapeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
