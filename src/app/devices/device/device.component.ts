import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Device} from "../Device";
import {DataService} from "../../data/data.service";
import {FormControl, Validators} from "@angular/forms";
import {DeviceModel} from "../../device-models/DeviceModel";
import {Manufacturer} from "../../device-models/Manufacturer";

export interface IDeviceDialogModel {
  device: Device;
  editMode: boolean;
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less']
})
export class DeviceComponent implements OnInit{
  ngOnInit(): void {
    this.manufacturers = this.dataService.GetManufacturers();
  }

  public editMode: boolean;
  public device: Device;
  public selectedManufacturerId: number;
  public manufacturers: Manufacturer[];
  public deviceModels: DeviceModel[];

  manufacturerControl = new FormControl('', [Validators.required]);
  modelControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<DeviceComponent>,
    @Inject(MAT_DIALOG_DATA) data: IDeviceDialogModel,
    public dataService: DataService) {

    this.editMode = data.editMode;
    this.device = data.device;
  }

  public loadDeviceModels(manufacturerId: number) {
    this.deviceModels = this.dataService.GetDeviceModel(manufacturerId);
  }
}
