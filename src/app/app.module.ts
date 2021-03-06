import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import { DevicesComponent } from './devices/devices.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {OverlayModule} from "@angular/cdk/overlay";
import { DeleteDeviceDialogComponent } from './devices/delete-device-dialog/delete-device-dialog.component';
import { DeviceComponent } from './devices/device/device.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactsComponent } from './contacts/contacts.component';
import { ListPageComponent } from './layout/list-page/list-page.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { AddressFormComponent } from './contacts/contact/address-form/address-form.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactSelectorComponent } from './contacts/contact-selector/contact-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DevicesComponent,
    DeviceListComponent,
    DeleteDeviceDialogComponent,
    DeviceComponent,
    ContactsComponent,
    ListPageComponent,
    ContactComponent,
    AddressFormComponent,
    ContactListComponent,
    ContactSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    OverlayModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ContactComponent,
    DeleteDeviceDialogComponent,
    DeviceComponent,
  ]
})
export class AppModule { }
