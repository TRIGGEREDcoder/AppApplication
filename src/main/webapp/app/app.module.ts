import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AppswiftApplicationSharedModule } from 'app/shared/shared.module';
import { AppswiftApplicationCoreModule } from 'app/core/core.module';
import { AppswiftApplicationAppRoutingModule } from './app-routing.module';
import { AppswiftApplicationHomeModule } from './home/home.module';
import { AppswiftApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AppswiftApplicationSharedModule,
    AppswiftApplicationCoreModule,
    AppswiftApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AppswiftApplicationEntityModule,
    AppswiftApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class AppswiftApplicationAppModule {}
