import {Manufacturer} from "../device-models/Manufacturer";
import {DeviceType} from "../device-models/DeviceType";
import {DeviceModel} from "../device-models/DeviceModel";
import {Device} from "../devices/Device";
import {Injectable} from "@angular/core";

const manufacturers: Manufacturer[] =[
  {id: 1, name: "Samsung"},
  {id: 2, name: "Dell"},
  {id: 3, name: "HP"},
];

const deviceTypes: DeviceType[] =[
  {id: 1, name: "laptop"},
  {id: 2, name: "tablet"},
];

const deviceModels: DeviceModel[] =[
  {
    id: 1,
    deviceType: deviceTypes[0],
    imageUrls: [],
    manufacturer: manufacturers[0],
    manufacturerId: 1,
    modelNumber: "1234",
    notes: "",
  },
  {
    id: 2,
    deviceType: deviceTypes[1],
    imageUrls: [],
    manufacturer: manufacturers[1],
    manufacturerId: 2,
    modelNumber: "t-1",
    notes: "",
  },
  {
    id:3,
    deviceType: deviceTypes[0],
    imageUrls: [],
    manufacturer: manufacturers[2],
    manufacturerId: 3,
    modelNumber: "l-2",
    notes: "",
  }
];

const device1: Device = new Device();
Object.assign(device1,
  {
    id: 1,
    receivedOn: new Date(2018, 1, 1),
    deviceModel: deviceModels[0],
    notes: "First Device",
    receivedFrom: {
      firstName: "Sam",
      lastName: "Lombardo",

    },
    serialNumber: "SM-1234",
    status: "Needs Format, Needs ChromeOS, Needs Hard Drive",
  });
const device2: Device = new Device();
Object.assign(device2,
  {
    id: 2,
    receivedOn: new Date(2017, 1, 1),
    deviceModel: deviceModels[1],
    notes: "My Tablet",
    receivedFrom: {
      firstName: "Sammy",
      lastName: "Lombardo",

    },
    serialNumber: "TB-1234",
    status: "Needs Mint OS, Needs RAM",
  });

const device3: Device = new Device();
Object.assign(device3,
  {
    id: 3,
    receivedOn: new Date(2018, 11, 12),
    deviceModel: deviceModels[2],
    notes: "work laptop",
    receivedFrom: {
      firstName: "Mas",
      lastName: "Lombardo",
      phoneNumbers: [
        { type: "Home", number: "555-555-5555"}
      ],
    },
    serialNumber: "LM-BO",
    status: "Ready",
  });

const devices: Device[] = [
  device1,
  device2,
  device3,
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public GetManufacturers() : Manufacturer[] {
    return manufacturers;
  }

  public GetDeviceTypes() : DeviceType[] {
    return deviceTypes;
  }

  public GetDeviceModel(manufacturerId: number) : DeviceModel[] {
    console.log(manufacturerId);
    let returnValue = deviceModels
      .filter( model => model.manufacturerId === manufacturerId);

    console.log(returnValue);
    return returnValue;
  }

  public GetDevices(): Device[]{
    return devices;
  }
}
