export const brandName = 'HashCoders'

export const platformListingColumns = [
    {
        id: 'listingName',
        name: 'LISTING NAME',
        selector: (row: { listingName: any; }) => row.listingName,
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