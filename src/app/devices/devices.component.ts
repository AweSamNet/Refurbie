import { Component, OnInit } from '@angular/core';
import {DeleteDeviceDialogComponent} from "./delete-device-dialog/delete-device-dialog.component";
import {MatDialog} from "@angular/material";
import {DeviceComponent} from "./device/device.component";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less']
})
export class DevicesComponent implements OnInit {

  public showDeviceDialog: boolean;
  constructor(public dialog: MatDialog) {
    this.showDeviceDialog = false;
  }

  ngOnInit() {
  }

  openDeviceForm(editMode?: boolean): void {
    // const device = this.dataSource.data.find(x => x.id == this.selectedId);
    const dialogRef = this.dialog.open(DeviceComponent, {
      width: '500px',
      data: {
        device: null,
        editMode: editMode,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
