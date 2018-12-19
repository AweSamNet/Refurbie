  import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ContactListDataSource } from './contact-list-datasource';
  import {DataService} from "../../data/data.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less'],
})
export class ContactListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ContactListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'lastName',
    'firstName',
    'phone',
    'phoneType',
    'address',
    'city',
    'state',
    'postalCode',
    'country',
    'email',
    'verified',
  ];

  constructor(public dataService:DataService) {

  }


  ngOnInit() {
    this.dataSource = new ContactListDataSource(this.paginator, this.sort, this.dataService);
  }
}
