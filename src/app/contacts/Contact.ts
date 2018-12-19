export interface IPhoneNumber {
  type: string;
  number: string;
  isPrimary: boolean;
}

export class Contact {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumbers: IPhoneNumber[];
  emailAddresses: string[];
  verified: boolean;
  notes: string;

  constructor(obj: any){
    this.phoneNumbers = [];
    if (obj) {
      Object.assign(this, obj)
    }
  }

  getPrimaryPhone(): IPhoneNumber {
    const first = this.phoneNumbers.find(phone => phone.isPrimary);

    return first || this.phoneNumbers[0];
  }
}
