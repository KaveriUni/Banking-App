import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes =[
    { path:'', component: ListComponent, title: " Accounts List"},
    { path:'add', component: AddComponent, title: "Add Account"},
    { path: ':id/update', component: UpdateComponent, title: "Update Account"},
    { path: ':id/view', component: ViewComponent, title: "View Account"}
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountsRoutingModule{

}