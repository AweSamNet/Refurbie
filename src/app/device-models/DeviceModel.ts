import {Manufacturer} from "./Manufacturer";
import {DeviceType} from "./DeviceType";

export class DeviceModel {
  manufacturer: Manufacturer;
  modelNumber: string;
  deviceType: DeviceType;
  notes: string;
  imageUrls: string[];
}
