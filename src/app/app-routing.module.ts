import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevicesComponent} from "./devices/devices.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes = [
  {path: 'devices', component: DevicesComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
