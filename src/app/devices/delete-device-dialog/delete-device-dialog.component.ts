import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Device} from "../Device";

@Component({
  selector: 'app-delete-device-dialog',
  templateUrl: './delete-device-dialog.component.html',
  styleUrls: ['./delete-device-dialog.component.less']
})
export class DeleteDeviceDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
