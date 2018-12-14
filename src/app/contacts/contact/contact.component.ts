import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DataService} from "../../data/data.service";
import {Contact} from "../Contact";

export interface IContactDialogModel {
  contact: Contact;
  editMode: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  public editMode: boolean;
  public contact: Contact;

  constructor(
    public dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) data: IContactDialogModel,
    public dataService: DataService) {

    this.editMode = data.editMode;
    this.contact = data.contact;
  }


  ngOnInit() {
  }

}
