import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD:src/app/app.module.ts
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
=======
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 9aab0c8a16ec1ee333e801cae1a1d12891bc3278:ERP/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD:src/app/app.module.ts
    HomeComponent
=======
>>>>>>> 9aab0c8a16ec1ee333e801cae1a1d12891bc3278:ERP/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
