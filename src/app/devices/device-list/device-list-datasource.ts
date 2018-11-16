import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Manufacturer} from "../../device-models/Manufacturer";
import {DeviceModel} from "../../device-models/DeviceModel";
import {Device} from "../Device";

// TODO: replace this with real data from your application
const manufacturers: Manufacturer[] =[

];
const deviceModels: DeviceModel[] =[

];
const device1: Device = new Device();
Object.assign(device1,
{
  receivedOn: new Date(2018, 1, 1),
  deviceModel: {
    deviceType: {id: 1, name: "laptop"},
    imageUrls: [],
    manufacturer: {id: 1, name: "Samsung"},
    modelNumber: "1234",
    notes: "",
  },
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
    receivedOn: new Date(2017, 1, 1),
    deviceModel: {
      deviceType: {id: 2, name: "tablet"},
      imageUrls: [],
      manufacturer: {id: 2, name: "Dell"},
      modelNumber: "t-1",
      notes: "",
    },
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
    receivedOn: new Date(2018, 11, 12),
    deviceModel: {
      deviceType: {id: 1, name: "laptop"},
      imageUrls: [],
      manufacturer: {id: 3, name: "HP"},
      modelNumber: "l-2",
      notes: "",
    },
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
  })

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
