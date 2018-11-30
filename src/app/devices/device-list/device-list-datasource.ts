import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Manufacturer} from "../../device-models/Manufacturer";
import {DeviceModel} from "../../device-models/DeviceModel";
import {Device} from "../Device";
import {DeviceType} from "../../device-models/DeviceType";

// TODO: replace this with real data from your application
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
    deviceType: deviceTypes[0],
    imageUrls: [],
    manufacturer: manufacturers[0],
    modelNumber: "1234",
    notes: "",
  },
  {
    deviceType: deviceTypes[1],
    imageUrls: [],
    manufacturer: manufacturers[1],
    modelNumber: "t-1",
    notes: "",
  },
  {
    deviceType: deviceTypes[0],
    imageUrls: [],
    manufacturer: manufacturers[2],
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

/**
 * Data source for the DeviceList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DeviceListDataSource extends DataSource<Device> {
  data: Device[] = devices;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Device[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Device[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Device[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'receivedOn': return compare(a.receivedOn, b.receivedOn, isAsc);
        case 'manufacturer': return compare(+a.deviceModel.manufacturer, +b.deviceModel.manufacturer, isAsc);
        case 'model': return compare(+a.deviceModel.modelNumber, +b.deviceModel.modelNumber, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
