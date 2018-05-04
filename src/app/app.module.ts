import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ServiceProviderComponent } from './components/service-provider/service-provider/service-provider.component';
import { ProductComponent } from './components/product/product/product.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MainDashComponent } from './main-dash/main-dash.component';
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  declarations: [    
    AppComponent, LoginComponent,  ServiceProviderComponent, ProductComponent, MainNavComponent, MainDashComponent, ProductTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
