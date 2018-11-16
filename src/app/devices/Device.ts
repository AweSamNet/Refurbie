import {DeviceModel} from "../device-models/DeviceModel";
import {Contact} from "../contacts/Contact";

export class Device{

  deviceModel: DeviceModel;
  serialNumber: string;
  notes: string;
  receivedFrom: Contact;
  receivedOn: Date;
  status: string;
}
