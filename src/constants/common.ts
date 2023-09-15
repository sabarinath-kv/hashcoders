export const brandName = 'HashCoders'

export enum UnitType {
  DIGITAL = 'digital',
  PHYSICAL = 'physical'
 }

 export enum AdFormat {
  MP3 = 'MP3',
  JPEG = 'JPEG',
  PNG = 'PNG',
  MP4 = 'MP4'
 }

 export const formats = Object.values(AdFormat);

 export type SupportedFormat = {
  format?: AdFormat;
  rating?: string;
  availability?: string;
  isBiding?: boolean;
}

export type Listing = {
    id: string;
    name: string;
    visitors?: number;
    uniqueUsers?: number;
    bounceRate?: string;
    unitType: UnitType;
    dimension: string;
    location: string;
    description: string;
    supportedFormats: SupportedFormat[]
}

export const locations = [
  'Kochi',
  'Bengaluru',
  'Mumbai'
]

export const platformListingColumns = [
    {
        id: 'listingName',
        name: 'LISTING NAME',
        selector: (row: { listingName: any; }) => row.listingName,
    },
    {
        id: 'unitType',
        name: 'Type',
        selector: (row: { type: any; }) => row.type,
    },
    {
        id: 'visitors',
        name: 'VISITORS',
        selector: (row: { visitors: any; }) => row.visitors,
        center: true
    }, 
      {
        id: 'uniqueUsers',
        name: 'UNIQUE USERS',
        selector: (row: { uniqueUsers: any; }) => row.uniqueUsers,
        center: true
    }, 
      {
        id: 'bounceRate',
        name: 'BOUNCE RATE',
        selector: (row: { bounceRate: any; }) => row.bounceRate,
    }, 
];
 

export const defaultListings: Listing[] = [
{
  id: '1',
  name: 'Metro-BillBoard-1',
  visitors: 20,
  uniqueUsers: 10,
  bounceRate: '20',
  unitType: UnitType.DIGITAL,
  dimension:  "14 x 48",
  location: 'Kakkanad',
  description: '',
  supportedFormats: [
    {
      format: AdFormat.MP3,
      rating: '400',
      availability: 'JAN 1, 2024 - FEB 1, 2024',
      isBiding: true,
    }
  ]
},
{
  id: '2',
  name: 'Metro-BillBoard-1',
  visitors: 20,
  uniqueUsers: 10,
  bounceRate: '20',
  unitType: UnitType.DIGITAL,
  dimension:  "14 x 48",
  location: 'Kakkanad',
  description: '',
  supportedFormats: [
    {
      format: AdFormat.JPEG,
      rating: '400',
      availability: 'JAN 1, 2024 - FEB 1, 2024',
      isBiding: true,
    }
  ]
},
{
  id: '3',
  name: 'Metro-BillBoard-1',
  visitors: 20,
  uniqueUsers: 10,
  bounceRate: '20',
  unitType: UnitType.DIGITAL,
  dimension:  "14 x 48",
  location: 'Kakkanad',
  description: '',
  supportedFormats: [
    {
      format: AdFormat.PNG,
      rating: '400',
      availability: 'JAN 1, 2024 - FEB 1, 2024',
      isBiding: true,
    }
  ]
},
{
  id: '4',
  name: 'Metro-BillBoard-1',
  visitors: 20,
  uniqueUsers: 10,
  bounceRate: '20',
  unitType: UnitType.DIGITAL,
  dimension:  "14 x 48",
  location: 'Kakkanad',
  description: '',
  supportedFormats: [
    {
      format: AdFormat.PNG,
      rating: '400',
      availability: 'JAN 1, 2024 - FEB 1, 2024',
      isBiding: true,
    }
  ]
},
{
  id: '5',
  name: 'Metro-BillBoard-1',
  visitors: 20,
  uniqueUsers: 10,
  bounceRate: '20',
  unitType: UnitType.DIGITAL,
  dimension:  "14 x 48",
  location: 'Kakkanad',
  description: '',
  supportedFormats: [
    {
      format: AdFormat.JPEG,
      rating: '400',
      availability: 'JAN 1, 2024 - FEB 1, 2024',
      isBiding: true,
    }
  ]
},

{
  id: '5',
  name: 'Metro-BillBoard-1',
  visitors: 20,
  uniqueUsers: 10,
  unitType: UnitType.DIGITAL,
  dimension:  "14 x 48",
  location: 'Kakkanad',
  description: '',
  supportedFormats: [
    {
      format: AdFormat.JPEG,
      rating: '400',
      availability: 'JAN 1, 2024 - FEB 1, 2024',
      isBiding: true,
    }
  ]
}
]