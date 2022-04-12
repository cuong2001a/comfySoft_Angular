import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
