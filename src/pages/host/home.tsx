import { platformListingColumns } from "@/constants/common";
import Table from "@/components/Table";
import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import SummaryCard from "@/components/SummaryCard";
import LineChart from "@/components/Charts/LineChart";
import CreateListing from "@/components/createListing";
import CustomModal from '@/components/Modal';
import { useState } from "react";

const platformListingData = [
  {
    id: 1,
    listingName: 'Beetlejuice',
    visitors: '20',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex align-items-start"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },
  {
    id: 2,
    listingName: 'Beetlejuice',
    visitors: '30',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },
  {
    id: 2,
    listingName: 'Beetlejuice',
    visitors: '30',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },
  {
    id: 2,
    listingName: 'Beetlejuice',
    visitors: '30',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },

  {
    id: 2,
    listingName: 'Beetlejuice',
    visitors: '30',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },
]

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <PrivateLayout title="DASHBOARD">
        <>
          <SummarySection />
          <div style={{justifyContent: 'space-between', display: 'flex', margin: '30px 0px 30px 0px'}}>
            <LineChart />
            <CreateListing />
            </div>
            <Table onRowClick={(row) => setShow(true)} title="Platform Listing"
            columns={platformListingColumns}
            data={platformListingData} />
        </>
      </PrivateLayout>
      <CustomModal setShow={setShow} show={show} />
    </>
  );
}

//  Summary section
const SummarySection = () => {
  return (
    <div style={{ marginTop: '50px' }} className="d-flex justify-content-between">
      <SummaryCard
        count="350,897"
        subText="Views"
        duration="Since last month"
        isGain
        percentage="3.48%"
        title="TOTAL AD BOOKINGS"
        icon="/icons/stats.png"
      />
      <SummaryCard
        count="2,356"
        duration="Since last month"
        isGain={false}
        percentage="3.48%"
        title="NEW USERS"
        icon="/icons/profit.png"
      />
      <SummaryCard
        count="350,897"
        duration="Since yesterday"
        isGain={false}
        percentage="1.10%"
        title="PROFIT"
        icon="/icons/new-user.png"

      />
    </div>
  )
}