import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AccountsModule { }
