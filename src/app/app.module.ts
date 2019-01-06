import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header.component';
import { SidebarComponent } from './views/shared/sidebar.component';
import { FooterComponent } from './views/shared/footer.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormbasicComponent } from './views/formbasic/formbasic.component';
import { TableComponent } from './views/table/table.component';
import { IconComponent } from './views/icon/icon.component';
import { BlankComponent } from './views/blank/blank.component';
import { ErrorComponent } from './views/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    routingComponents,
    ProfileComponent,
    FormbasicComponent,
    TableComponent,
    IconComponent,
    BlankComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
