import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountsModule } from './accounts/accounts.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  {path:'accounts', loadChildren: () =>
                        import('./accounts/accounts.module').then(m =>
                          m.AccountsModule
                        )
  },
  {path: '', component: HomeComponent, title: "Home"},
  {path: 'logs', component: LogsComponent, title: "Logs"}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, LogsComponent
  ],
  imports: [
    BrowserModule,
    // AccountsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
