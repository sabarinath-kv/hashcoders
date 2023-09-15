import { FC } from "react";
import Icon from "../Icon";

const spotList = [
    {
        name: 'FLIGHTS',
        icon: '/icons/user/flights.png'
    },
    {
        name: 'TRAINS',
        icon: '/icons/user/trains.png'
    },
    {
        name: 'CINEMAS',
        icon: '/icons/user/cinemas.png'
    },
    {
        name: 'METROS',
        icon: '/icons/user/metros.png'
    },
    {
        name: 'OUTDOORS',
        icon: '/icons/user/outdoors.png'
    },
    {
        name: 'DIGITAL',
        icon: '/icons/user/digitals.png'
    },
    {
        name: 'SPORTS',
        icon: '/icons/user/sports.png'
    },
    {
        name: 'BILLBOARDS',
        icon: '/icons/user/billboards.png'
    },
    {
        name: 'NEWSPAPER',
        icon: '/icons/user/newspaper.png'
    }
];

const FindYourSpot: FC = () => {
    const greyCardClass = "rounded shadow-sm d-flex flex-column justify-content-center align-items-center mb-2";
    return (
        <div className="rounded shadow-sm p-3 bg-light" style={{marginLeft: '20px'}}>
            <h6>FIND YOUR SPOT</h6>
            <div className="d-flex" style={{flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '360px'}}>
                {spotList?.map((item, index) => (
                    <div className={greyCardClass} style={{backgroundColor: '#F1F1F1;', padding: '26px', marginRight: '16', width: '100px', cursor: 'grab'}}>
                    <Icon url={item.icon} width={40} height={40} />
                    <span style={{fontSize: '10px', marginTop: '5px'}}>{item.name}</span>
                </div>
                ))}
            </div>
        </div>
    );
};

export default FindYourSpot;
