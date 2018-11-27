import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import { DeviceListDataSource } from './device-list-datasource';
import {CdkOverlayOrigin} from "@angular/cdk/overlay";
import {DeleteDeviceDialogComponent} from "../delete-device-dialog/delete-device-dialog.component";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.less'],
})
export class DeviceListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public actionsOrigin: CdkOverlayOrigin;

  dataSource: DeviceListDataSource;
  public showActions:boolean;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['receivedOn', 'manufacturer', 'model', 'status', 'actions'];
  public selectedId: number;

  constructor(public dialog: MatDialog) {
    this.showActions = false;
  }


  ngOnInit() {
    this.dataSource = new DeviceListDataSource(this.paginator, this.sort);
  }

  actionsClick(id: number, control){
    this.selectedId = id;
    this.showActions = this.actionsOrigin != control || !this.showActions
    this.actionsOrigin = control;
  }

  openDeleteDialog(): void {
    const device = this.dataSource.data.find(x => x.id == this.selectedId);
    const dialogRef = this.dialog.open(DeleteDeviceDialogComponent, {
      width: '400px',
      data: device,
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.animal = result;
    });
  }
}
