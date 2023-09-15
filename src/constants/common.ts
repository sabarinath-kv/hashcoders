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