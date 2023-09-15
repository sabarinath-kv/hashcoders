import { FC } from "react";
import Icon from "../Icon";
import { spotList } from "@/constants/common";
import { useRecoilState } from "recoil";
import { selectedUnitTypeAtom } from "@/states/atom";
import { useRouter } from "next/navigation";

const FindYourSpot: FC = () => {
    const [, setSelectedUnitType] = useRecoilState(selectedUnitTypeAtom);
    const {push} = useRouter();
    const onClick = (item: any) => {
        setSelectedUnitType(item.name);
        push('/user/choose-spots');
    }
    const greyCardClass = "rounded shadow-sm d-flex flex-column justify-content-center align-items-center mb-2";
    return (
        <div className="rounded shadow-sm p-3 bg-light" style={{marginLeft: '20px'}}>
            <h6>FIND YOUR SPOT</h6>
            <div className="d-flex" style={{flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '360px'}}>
                {spotList?.map((item, index) => (
                    <div onClick={() => onClick(item)} className={greyCardClass} style={{backgroundColor: '#F1F1F1;', padding: '26px', marginRight: '16', width: '100px', cursor: 'grab'}}>
                    <Icon url={item.icon} width={40} height={40} />
                    <span style={{fontSize: '10px', marginTop: '5px'}}>{item.name}</span>
                </div>
                ))}
            </div>
        </div>
    );
};

export default FindYourSpot;
