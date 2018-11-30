import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Device} from "../Device";

export interface IDeviceDialogModel {
  device: Device;
  editMode: boolean;
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less']
})
export class DeviceComponent {

  public editMode: boolean;
  public device: Device;

  constructor(
    public dialogRef: MatDialogRef<DeviceComponent>,
    @Inject(MAT_DIALOG_DATA) data: IDeviceDialogModel) {

    this.editMode = data.editMode;
    this.device = data.device;
  }
}
