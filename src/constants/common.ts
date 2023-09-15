export const brandName = 'ADHere'

export enum UnitType {
    PHYSICAL = 'PHYSICAL',
    FLIGHTS = 'FLIGHTS',
    TRAINS = 'TRAINS',
    CINEMAS = 'CINEMAS',
    METROS = 'METROS',
    OUTDOORS = 'OUTDOORS',
    DIGITAL = 'DIGITAL',
    SPORTS = 'SPORTS',
    BILLBOARDS = 'BILLBOARDS',
    NEWSPAPER = 'NEWSPAPER'
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

export type UserAd = {
  imageUrl: string,
  title: string,
  rating: number,
  type: UnitType,
  location: string,
  reach: number,
  discount: number,
  pricing: number,
  isSponsored: boolean,
  id: number,
  activeDays?: number;
}

export const locations = [
  'Kochi',
  'Bengaluru',
  'Mumbai'
]

export const spotList = [
  {
      name: UnitType.FLIGHTS,
      icon: '/icons/user/flights.png'
  },
  {
      name: UnitType.TRAINS,
      icon: '/icons/user/trains.png'
  },
  {
    name: UnitType.DIGITAL,
    icon: '/icons/user/digitals.png'
},
  {
      name: UnitType.CINEMAS,
      icon: '/icons/user/cinemas.png'
  },
  {
      name: UnitType.METROS,
      icon: '/icons/user/metros.png'
  },
  {
      name: UnitType.OUTDOORS,
      icon: '/icons/user/outdoors.png'
  },
  {
      name: UnitType.SPORTS,
      icon: '/icons/user/sports.png'
  },
  {
      name: UnitType.BILLBOARDS,
      icon: '/icons/user/billboards.png'
  },
  {
      name: UnitType.NEWSPAPER,
      icon: '/icons/user/newspaper.png'
  }
];

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
  bounceRate: '10',
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
]

export const userAdsColumns = [
  {
      id: 'adName',
      name: 'AD NAME',
      selector: (row: { adName: any; }) => row.adName,
  },
  {
      id: 'platform',
      name: 'PLATFORM',
      selector: (row: { platform: any; }) => row.platform,
      center: true
  }, 
    {
      id: 'viewers',
      name: 'VIEWERS',
      selector: (row: { viewers: any; }) => row.viewers,
      center: true
  }, 
  {
      id: 'activeDays',
      name: 'NO.OF DAYS ACTIVE',
      selector: (row: { activeDays: any; }) => row.activeDays,
  },
  {
    id: 'totalInvestment',
    name: 'TOTAL INVESTMENT',
    selector: (row: { totalInvestment: any; }) => row.totalInvestment,
  }, 
];

export const UserAdOptionsList: UserAd[] = [
  {
      imageUrl: '/user/thumbnail.png',
      title: 'BillBoard-1',
      rating: 4,
      type: UnitType.BILLBOARDS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 1,
  },
  {
      imageUrl: '/user/place2.png',
      title: 'Delhi metro',
      rating: 4,
      type: UnitType.METROS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 2,
  },
  {
      imageUrl: '/user/thumbnail.png',
      title: 'Kochi metro',
      rating: 4,
      type: UnitType.METROS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 3,
  },
  {
      imageUrl: '/user/place1.png',
      title: 'Ashirvad perumbavoor',
      rating: 4,
      type: UnitType.CINEMAS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 4,
  },
  {
      imageUrl: '/user/place2.png',
      title: 'Kochi metro',
      rating: 4,
      type: UnitType.DIGITAL,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 5,
  },
  {
    imageUrl: '/user/platform.png',
      title: 'Singapore airlines',
      rating: 4,
      type: UnitType.FLIGHTS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 6,
  },
  {
      imageUrl: '/user/paper.png',
      title: 'The Hindu',
      rating: 4,
      type: UnitType.NEWSPAPER,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 7,
  },
  {
    imageUrl: '/user/place2.png',
      title: 'Metro-BillBoard-1',
      rating: 4,
      type: UnitType.METROS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 8,
  },
  {
      imageUrl: '/user/place2.png',
      title: 'Metro-BillBoard-1',
      rating: 4,
      type: UnitType.METROS,
      location: 'Kochi Metro',
      reach: 1.3,
      discount: 15,
      pricing: 126,
      isSponsored: false,
      id: 9,
  },
  
];

export type UserFlow = "user" | "host";
