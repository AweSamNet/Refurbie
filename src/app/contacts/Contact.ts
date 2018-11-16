export class Contact {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumbers: {
    type: string;
    number: string;
  };
  emailAddresses: string[];
  verified: boolean;
  notes: string;
}
