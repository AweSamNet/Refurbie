import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DeviceListDataSource } from './device-list-datasource';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.less'],
})
export class DeviceListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DeviceListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['receivedOn', 'manufacturer', 'model', 'status'];

  ngOnInit() {
    this.dataSource = new DeviceListDataSource(this.paginator, this.sort);
  }
}
