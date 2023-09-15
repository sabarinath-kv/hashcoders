import ChooseSpotsLayout from "@/components/ChooseSpotsLayout";
import Icon from "@/components/Icon";
import AdTargetCard from "@/components/UserModule/AdTargetCard";
import { UnitType, UserAdOptionsList } from "@/constants/common";
import { selectedUnitTypeAtom, targetAdIdListAtom } from "@/states/atom";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useRecoilState } from "recoil";

const ChooseSpots = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [targetAdIdList, setTargetAdIdList] = useRecoilState(targetAdIdListAtom);
  const [selectedUnitType, setSelectedUnitType] = useRecoilState(selectedUnitTypeAtom);
  const [search, setSearch] = useState('');

  const {push} = useRouter();


  const [currentType, setCurrentType] = useState<UnitType>();
  const onCardPress = (cardId: number) => {
    const isItemSelected = selectedIds.indexOf(cardId) !== -1;
    if (isItemSelected) {
      setSelectedIds(prev => prev.filter((item) => item !== cardId));
    } else {
      setSelectedIds(prev => [...prev, cardId]);
    }
  };

  const filteredAdOptions = useMemo(() => {
    let temp = UserAdOptionsList;

    if (currentType) {
      temp = temp.filter((item) => item.type === currentType)
    }
    if (search.length) {
      temp = temp.filter((item) => item.title.toLowerCase().match(search.toLowerCase()))
    }
    if (selectedUnitType)
      temp = selectedUnitType ? 
        UserAdOptionsList.filter((item) => item.type === selectedUnitType) : selectedUnitType;
    return temp;
  }, [currentType, search, selectedUnitType])



  return (
    <>
      <ChooseSpotsLayout title="CHOOSE SPOTS">
        <>

          <Form className="d-flex justify-content-center">
            <Form.Control
              style={{ background: 'transparent', color: 'white', width: '409px', height: '38px', borderRadius: '12px' }}
              className="search"
              value={search}
              type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search Platforms here" />
          </Form>
          <div
            className="d-flex justify-content-end align-items-end"
            style={{ marginBottom: '40px', marginRight: 40, gap: '20px' }}
          >
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Location
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Kochi</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bengaluru</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {!selectedUnitType ? <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentType ?? 'Type of Platform'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {Object.values(UnitType).map((item) => <Dropdown.Item onClick={() => setCurrentType(item)}>{item}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown> : null}
          </div>

          <div style={{ justifyContent: 'space-between', display: 'flex', paddingLeft: '30px', paddingTop: '60px', margin: '30px 0px 30px 0px', flexWrap: 'wrap' }}>
            {filteredAdOptions?.map((item, index) => (
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
            style={{ position: 'absolute', zIndex: 10, bottom: 30, backgroundColor: 'rgba(255, 255, 255, 0.9)', height: '100px', width: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Button
              onClick={() => {
                setSelectedUnitType(null);
                setTargetAdIdList(selectedIds);
                push('/user/uploadAdMedia')
              }}
              disabled={!selectedIds.length}
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