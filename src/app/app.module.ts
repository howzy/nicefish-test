import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import { UserRegisterComponent } from './user/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
