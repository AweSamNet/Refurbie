import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {ContactComponent} from "./contact/contact.component";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  public showContactDialog: boolean;
  constructor(public dialog: MatDialog) {
    this.showContactDialog = false;
  }

  ngOnInit() {
  }

  openContactForm(editMode?: boolean): void {
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '500px',
      data: {
        contact: null,
        editMode: editMode,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


}
