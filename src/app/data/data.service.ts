import {Manufacturer} from "../device-models/Manufacturer";
import {DeviceType} from "../device-models/DeviceType";
import {DeviceModel} from "../device-models/DeviceModel";
import {Device} from "../devices/Device";
import {Injectable} from "@angular/core";
import {Contact} from "../contacts/Contact";

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

const contacts: Contact[] = [
  new Contact(<Contact>{
    firstName: "Sam",
    lastName: "Lombardo",
    addressLine1: "123 Abcde st.",
    addressLine2: "",
    city: "Montreal",
    state: "QC",
    postalCode: "J1J1J1",
    country: "CA",
    phoneNumbers: [
      {type: "Home", number: "123-444-4321", isPrimary: true},
      {type: "Mobile", number: "555-555-5555"},
      {type: "Work", number: "222.222.2222"},
    ],
    emailAddresses: ["test@test.com",],
    verified: true,
    notes: "this is my very first contact!",
  }),
  new Contact(<Contact>{
    firstName: "Joe",
    lastName: "Joesome",
    addressLine1: "544 Test st.",
    addressLine2: "",
    city: "Abbotsford",
    state: "BC",
    postalCode: "J1J1J1",
    country: "CA",
    phoneNumbers: [
    ],
    emailAddresses: ["test2@test.com",],
    verified: true,
    notes: "this is my very second contact!",
  }),
  new Contact(<Contact>{
    firstName: "Marge",
    lastName: "Margesome",
    addressLine1: "1 Idunno dr.",
    addressLine2: "This is second line",
    city: "Salt Lake City",
    state: "UT",
    postalCode: "99999",
    country: "US",
    phoneNumbers: [
      {type: "Home", number: "123-444-4321"},
      {type: "Mobile", number: "555-555-5555"},
      {type: "Work", number: "435.678.3456", isPrimary: true},
    ],
    emailAddresses: ["testus@test.us",],
    verified: false,
    notes: "this is my very first US contact!",
  }),
  new Contact(<Contact>{
    firstName: "Mas",
    lastName: "Odrabmol",
    addressLine1: "321 Abcde st.",
    addressLine2: "",
    city: "laertnom",
    state: "QC",
    postalCode: "J1J1J1",
    country: "CA",
    phoneNumbers: [
      {type: "Mobile", number: "111-111-1111"},
    ],
    emailAddresses: ["test2@test2.com",],
    verified: true,
    notes: "this is my very first reverse contact!",
  }),
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

  public GetContacts(): Contact[]{
    return contacts;
  }
}
