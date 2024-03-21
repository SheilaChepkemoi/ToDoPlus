import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './feature/pages/homepage/homepage.component';
import { TaskmanagerComponent } from './feature/pages/taskmanager/taskmanager.component';
import { LoginComponent } from './account/auth/login/login.component';
import { RegistrationComponent } from './account/auth/registration/registration.component';
import { ForgotpasswordComponent } from './account/auth/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    HomepageComponent,
    TaskmanagerComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
