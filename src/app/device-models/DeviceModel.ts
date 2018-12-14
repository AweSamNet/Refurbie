import {Manufacturer} from "./Manufacturer";
import {DeviceType} from "./DeviceType";

export class DeviceModel {
  id: number;
  manufacturerId: number;
  manufacturer: Manufacturer;
  modelNumber: string;
  deviceType: DeviceType;
  notes: string;
  imageUrls: string[];
}
