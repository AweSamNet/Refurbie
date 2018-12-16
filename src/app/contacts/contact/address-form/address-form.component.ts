import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {VALID} from "@angular/forms/src/model";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.less'],
})
export class AddressFormComponent {
  phoneNumberPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    country: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    ],
    homePhone: [null, Validators.pattern(this.phoneNumberPattern)],
    mobilePhone: [null, Validators.compose([
      Validators.pattern(this.phoneNumberPattern), Validators.required
    ])],
    workPhone: [null, Validators.pattern(this.phoneNumberPattern)],
    email: [null, Validators.compose([
      Validators.email, Validators.required
    ])],
    verified: false,
    notes: null,
  });

  hasUnitNumber = false;

  countries =[
    {name: 'Canada', abbreviation: 'CA'},
    {name: 'USA', abbreviation: 'US'},
  ];

  states = [
    {name: 'Alabama', abbreviation: 'AL', country: 'US'},
    {name: 'Alaska', abbreviation: 'AK', country: 'US'},
    {name: 'American Samoa', abbreviation: 'AS', country: 'US'},
    {name: 'Arizona', abbreviation: 'AZ', country: 'US'},
    {name: 'Arkansas', abbreviation: 'AR', country: 'US'},
    {name: 'California', abbreviation: 'CA', country: 'US'},
    {name: 'Colorado', abbreviation: 'CO', country: 'US'},
    {name: 'Connecticut', abbreviation: 'CT', country: 'US'},
    {name: 'Delaware', abbreviation: 'DE', country: 'US'},
    {name: 'District Of Columbia', abbreviation: 'DC', country: 'US'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM', country: 'US'},
    {name: 'Florida', abbreviation: 'FL', country: 'US'},
    {name: 'Georgia', abbreviation: 'GA', country: 'US'},
    {name: 'Guam', abbreviation: 'GU', country: 'US'},
    {name: 'Hawaii', abbreviation: 'HI', country: 'US'},
    {name: 'Idaho', abbreviation: 'ID', country: 'US'},
    {name: 'Illinois', abbreviation: 'IL', country: 'US'},
    {name: 'Indiana', abbreviation: 'IN', country: 'US'},
    {name: 'Iowa', abbreviation: 'IA', country: 'US'},
    {name: 'Kansas', abbreviation: 'KS', country: 'US'},
    {name: 'Kentucky', abbreviation: 'KY', country: 'US'},
    {name: 'Louisiana', abbreviation: 'LA', country: 'US'},
    {name: 'Maine', abbreviation: 'ME', country: 'US'},
    {name: 'Marshall Islands', abbreviation: 'MH', country: 'US'},
    {name: 'Maryland', abbreviation: 'MD', country: 'US'},
    {name: 'Massachusetts', abbreviation: 'MA', country: 'US'},
    {name: 'Michigan', abbreviation: 'MI', country: 'US'},
    {name: 'Minnesota', abbreviation: 'MN', country: 'US'},
    {name: 'Mississippi', abbreviation: 'MS', country: 'US'},
    {name: 'Missouri', abbreviation: 'MO', country: 'US'},
    {name: 'Montana', abbreviation: 'MT', country: 'US'},
    {name: 'Nebraska', abbreviation: 'NE', country: 'US'},
    {name: 'Nevada', abbreviation: 'NV', country: 'US'},
    {name: 'New Hampshire', abbreviation: 'NH', country: 'US'},
    {name: 'New Jersey', abbreviation: 'NJ', country: 'US'},
    {name: 'New Mexico', abbreviation: 'NM', country: 'US'},
    {name: 'New York', abbreviation: 'NY', country: 'US'},
    {name: 'North Carolina', abbreviation: 'NC', country: 'US'},
    {name: 'North Dakota', abbreviation: 'ND', country: 'US'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP', country: 'US'},
    {name: 'Ohio', abbreviation: 'OH', country: 'US'},
    {name: 'Oklahoma', abbreviation: 'OK', country: 'US'},
    {name: 'Oregon', abbreviation: 'OR', country: 'US'},
    {name: 'Palau', abbreviation: 'PW', country: 'US'},
    {name: 'Pennsylvania', abbreviation: 'PA', country: 'US'},
    {name: 'Puerto Rico', abbreviation: 'PR', country: 'US'},
    {name: 'Rhode Island', abbreviation: 'RI', country: 'US'},
    {name: 'South Carolina', abbreviation: 'SC', country: 'US'},
    {name: 'South Dakota', abbreviation: 'SD', country: 'US'},
    {name: 'Tennessee', abbreviation: 'TN', country: 'US'},
    {name: 'Texas', abbreviation: 'TX', country: 'US'},
    {name: 'Utah', abbreviation: 'UT', country: 'US'},
    {name: 'Vermont', abbreviation: 'VT', country: 'US'},
    {name: 'Virgin Islands', abbreviation: 'VI', country: 'US'},
    {name: 'Virginia', abbreviation: 'VA', country: 'US'},
    {name: 'Washington', abbreviation: 'WA', country: 'US'},
    {name: 'West Virginia', abbreviation: 'WV', country: 'US'},
    {name: 'Wisconsin', abbreviation: 'WI', country: 'US'},
    {name: 'Wyoming', abbreviation: 'WY', country: 'US'},

    {name: 'Alberta', abbreviation: 'AB', country: 'CA'},
    {name: 'British Columbia', abbreviation: 'BC', country: 'CA'},
    {name: 'Manitoba', abbreviation: 'MB', country: 'CA'},
    {name: 'New Brunswick', abbreviation: 'NB', country: 'CA'},
    {name: 'Newfoundland and Labrador', abbreviation: 'NL', country: 'CA'},
    {name: 'Northwest Territories', abbreviation: 'NT', country: 'CA'},
    {name: 'Nova Scotia', abbreviation: 'NS', country: 'CA'},
    {name: 'Nunavut', abbreviation: 'NU', country: 'CA'},
    {name: 'Ontario', abbreviation: 'ON', country: 'CA'},
    {name: 'Prince Edward Island', abbreviation: 'PE', country: 'CA'},
    {name: 'Quebec', abbreviation: 'QC', country: 'CA'},
    {name: 'Saskatchewan', abbreviation: 'SK', country: 'CA'},
    {name: 'Yukon', abbreviation: 'YT', country: 'CA'},
  ];

  filteredStates: {name: string, abbreviation: string, country: string}[];
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }

  setFilteredStates(countryCode) {
    console.log(`filtering: ${countryCode}`);
    this.filteredStates = this.states.filter(state => state.country === countryCode);
  }

}
