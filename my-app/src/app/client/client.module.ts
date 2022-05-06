import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { BannerComponent } from './pages/home/component/banner/banner.component';
import { FilterComponent } from './pages/product/filter/filter.component';
import { ShowProductComponent } from './pages/product/show-product/show-product.component';
import { LinkComponent } from '../component/link/link.component';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    ProductComponent,
    BannerComponent,
    FilterComponent,
    ShowProductComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
