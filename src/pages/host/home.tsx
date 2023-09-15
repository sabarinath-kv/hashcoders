import { Listing, platformListingColumns } from "@/constants/common";
import Table from "@/components/Table";
import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import SummaryCard from "@/components/SummaryCard";
import LineChart from "@/components/Charts/LineChart";
import CreateListing from "@/components/CreateListing";
import CustomModal from '@/components/Modal';
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { listingAtom } from "@/states/atom";

export default function Home() {
  const [show, setShow] = useState(false);
  const listing = useRecoilValue(listingAtom);
  const [selectedListing, setSelectedListing] = useState<Listing>();

  const tableData = useMemo(() => {
    return listing?.map((item, index) => 
      ({
        id: item.id,
        listingName: item?.name,
        type: item.unitType,
        visitors: item?.visitors ?? 0,
        uniqueUsers: item?.uniqueUsers ?? 0,
        bounceRate: item?.bounceRate ? <div className="gap-2 d-flex"><Icon url={item.id == '2' ? '/icons/down.png' : '/icons/up.png'} width={15} height={15} /><p>{item?.bounceRate}</p></div> : '-----------',
      })
    )
  }, [listing])

  const onRowClick = (id: string) => {
    const selectedItem = listing.find((item) => item.id === id);
    setSelectedListing(selectedItem);
    setShow(true);
  }

  return (
    <>
      <PrivateLayout title="DASHBOARD">
        <>
          <SummarySection />
          <div style={{justifyContent: 'space-between', display: 'flex', margin: '30px 0px 30px 0px'}}>
            <LineChart />
            <CreateListing />
            </div>
            {tableData?.length ? <Table onRowClick={(row) => {
              onRowClick(row.id)
           }} title="Platform Listing"
            columns={platformListingColumns}
            data={tableData} /> : null}
        </>
      </PrivateLayout>
      {selectedListing ? <CustomModal listing={selectedListing} setShow={() => {
        setShow(false);
        setSelectedListing(undefined);
      }} show={show} /> : null}
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