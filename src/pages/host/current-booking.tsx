import PrivateLayout from "@/components/PrivateLayout";
import Table from "@/components/Table";

const currentBookingColumns = [
  {
      id: 'listingName',
      name: 'LISTING NAME',
      selector: (row: { listingName: any; }) => row.listingName,
  },
  {
      id: 'user',
      name: 'USER',
      selector: (row: { user: any; }) => row.user,
      center: true
  }, 
  {
      id: 'scheduleStart',
      name: 'Schedule Start',
      selector: (row: { scheduleStart: any; }) => row.scheduleStart,
      center: true
  }, 
  {
      id: 'scheduleEnd',
      name: 'Schedule End',
      selector: (row: { scheduleEnd: any; }) => row.scheduleEnd,
  },
  {
    id: 'expectedIncome',
    name: 'Expected Income',
    selector: (row: { expectedIncome: any; }) => row.expectedIncome,
  },
  {
    id: 'status',
    name: 'STATUS',
    selector: (row: { status: any; }) => (row.status === 'Existing' ? (<a style={{textDecoration: 'none'}} href = "#"><p className="text-primary">View Details</p></a>) : 
    (<div className="d-flex align-items-center">
        <div style={{width: 52, height: 22, backgroundColor: 'green', marginRight: '5px', textAlign: 'center'}} className="rounded">
          <span style={{color: 'white',margin: 0, fontSize: 10}}>Accept</span>
        </div>
        <div style={{width: 52, height: 22, backgroundColor: 'red', textAlign: 'center'}} className="rounded">
        <span style={{color: 'white', fontSize: 10}}>Deny</span>
          </div>
      </div>)),
  } 
];

const platformListingData = [
  {
    id: 1,
    listingName: '/digital/Metro-BillBoard-1',
    user: 'UUID40032',
    scheduleStart: '01:00PM , 23 Jan 2023',
    scheduleEnd: '01:00PM , 23 Jan 2023',
    expectedIncome: 'INR 3000',
    status: "New"
  },
  {
    id: 2,
    listingName: '/physical/Metro-BillBoard-2',
    user: 'UUID40033',
    scheduleStart: '01:00PM , 23 Jan 2023',
    scheduleEnd: '01:00PM , 23 Jan 2023',
    expectedIncome: 'INR 3000',
    status: "Existing"
  },
  {
    id: 3,
    listingName: '/digital/Metro-BillBoard-3',
    user: 'UUID40050',
    scheduleStart: '01:00PM , 23 Jan 2023',
    scheduleEnd: '01:00PM , 23 Jan 2023',
    expectedIncome: 'INR 3000',
    status: "Existing"
  },
  {
    id: 4,
    listingName: '/physical/Metro-BillBoard-4',
    user: 'UUID40111',
    scheduleStart: '01:00PM , 23 Jan 2023',
    scheduleEnd: '01:00PM , 23 Jan 2023',
    expectedIncome: 'INR 3000',
    status: "Existing"
  },

  {
    id: 5,
    listingName: '/physical/Metro-BillBoard-5',
    user: 'UUID40038',
    scheduleStart: '01:00PM , 23 Jan 2023',
    scheduleEnd: '01:00PM , 23 Jan 2023',
    expectedIncome: 'INR 3000',
    status: "Existing"
  },
]

const CreateListingPage = () => {

  return (
    <>
      <PrivateLayout title="CURRENT BOOKING">
        <div style={{marginTop: '160px'}}>
          <Table title="Platform Listing"
              columns={currentBookingColumns}
              data={platformListingData} 
            />
        </div>
      </PrivateLayout>
    </>
  );
};

export default CreateListingPage;
