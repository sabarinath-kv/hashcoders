import { userAdsColumns } from "@/constants/common";
import Table from "@/components/Table";
import PrivateLayout from "@/components/PrivateLayout";
import UserAdAnalysis from "@/components/UserModule/AdAnalysis";
import FindYourSpot from "@/components/UserModule/FindYourSpot";

const userAdsData = [
  {
    id: 1,
    adName: 'Yardley-vdo-ad',
    viewers: '4,569',
    activeDays: '3',
    platform: 'Metro-BillBoard-1',
    totalInvestment: '32KINR',
  },
  {
    id: 2,
    adName: 'Yardley-cine-ad',
    viewers: '3,985',
    activeDays: '2',
    platform: 'IMAX-CineVideo-4',
    totalInvestment: '32KINR',
  },
  {
    id: 3,
    adName: 'Yardley-poster-ad',
    viewers: '513',
    activeDays: '1',
    platform: 'IRCTC-Digi-BillB',
    totalInvestment: '32KINR',
  },
  {
    id: 4,
    adName: 'Yardley-srk-poster',
    viewers: '250',
    activeDays: '6',
    platform: 'MetroBridge-LampPoster',
    totalInvestment: '32KINR',
  },

  {
    id: 5,
    adName: 'Yardley-srk-moving',
    viewers: '1,795',
    activeDays: '10',
    platform: 'WaterMetro-BillB-2',
    totalInvestment: '32KINR',
  },
]

const UserDashboard = () => {
  return (
    <>
      <PrivateLayout title="DASHBOARD" flow="user">
        <>
          <div style={{justifyContent: 'center', display: 'flex', margin: '30px 0px 30px 0px'}}>
            <UserAdAnalysis />
            <FindYourSpot />
            </div>
            <Table title="MY ADS"
            columns={userAdsColumns}
            data={userAdsData} />
        </>
      </PrivateLayout>
    </>
  );
};

export default UserDashboard;
