import ChooseSpotsLayout from "@/components/ChooseSpotsLayout";
import AdTargetCard from "@/components/UserModule/AdTargetCard";
import { UserAdOptionsList } from "@/constants/common";
import { targetAdIdListAtom } from "@/states/atom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useRecoilState } from "recoil";

const ChooseSpots = () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [targetAdIdList, setTargetAdIdList] = useRecoilState(targetAdIdListAtom);
    const onCardPress = (cardId: number) => {
        const isItemSelected = selectedIds.indexOf(cardId) !== -1;
        if (isItemSelected) {
            setSelectedIds(prev => prev.filter((item) => item !== cardId));
        } else {
            setSelectedIds(prev => [...prev, cardId]);
        }
    };
    return (
      <>
        <ChooseSpotsLayout title="CHOOSE SPOTS">
          <>
          <div style={{justifyContent: 'center', display: 'flex', margin: '30px 0px 30px 0px', flexWrap: 'wrap'}}>
            {UserAdOptionsList?.map((item, index) => (
                <AdTargetCard
                    key={index}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    rating={item.rating}
                    // @ts-ignore
                    type={item.type}
                    location={item.location}
                    isSponsored={item.isSponsored}
                    discount={item.discount}
                    pricing={item.pricing}
                    reach={item.reach}
                    id={item.id}
                    onClick={() => onCardPress(item.id)}
                    isSelected={selectedIds.indexOf(item.id) !== -1}
                />
            ))}
          </div>
          <div
            className="d-flex"
            style={{position: 'absolute', bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', height: '100px', width: '100%', justifyContent: 'center', alignItems: 'center'}}
            >
                <Button
                onClick={() => setTargetAdIdList(selectedIds)}
            style={{ backgroundColor: '#5E72E4' }}
            className="mt-2"
            variant="primary">
            Continue
          </Button>
            </div>
            
          </>
        </ChooseSpotsLayout>
      </>
    );
  };
  
  export default ChooseSpots;