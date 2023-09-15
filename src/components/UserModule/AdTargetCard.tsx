import { UnitType } from "@/constants/common";
import Image from "next/image";
import { FC } from "react";
import StarRating from "./Rating";
import Icon from "../Icon";

export type AdTargetCardParams = {
  imageUrl: string;
  title: string;
  rating: number;
  type: keyof typeof UnitType;
  discount: number;
  location: string;
  reach: number;
  pricing: number;
  isSponsored?: boolean;
  isSelected?: boolean;
  id: number;
  onClick: () => void;
};

const AdTargetCard: FC<AdTargetCardParams> = ({
  imageUrl,
  title,
  rating,
  type,
  discount,
  location,
  reach,
  pricing,
  isSponsored = false,
  isSelected,
  onClick
}: AdTargetCardParams) => {
    const discountedPrice = ((100 - discount) * pricing) / 100;
    const borderColor = isSelected ? '#2DCE89' : 'white';
  return (
    <div 
        className="rounded p-2 bg-light w-25" 
        onClick={onClick}
        style={{marginRight: '40px', marginBottom: '40px', cursor: 'grab', border: 'solid', borderWidth: 5, borderColor}}>
      <div className="d-flex">
        <Image width={110} height={115} alt="" src={imageUrl} />
        <div className="d-flex flex-column w-100" style={{ paddingLeft: "8px" }}>
          <h6 style={{ color: "#525F7F" }}>{title}</h6>
          <StarRating rating={rating} />
          <div className="d-flex mt-2">
            <span
              className="rounded"
              style={{
                backgroundColor: "rgba(255, 57, 57, 0.1)",
                padding: "3px",
                textAlign: "center",
                color: "#F34C41",
                fontSize: "12px",
              }}
            >
              {type}
            </span>
            <span
              className="rounded"
              style={{
                backgroundColor: "#CE2D2D",
                padding: "3px",
                textAlign: "center",
                color: "white",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              {`${discount}%OFF`}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <Icon url="/user/map.png" width={11} height={14} />
            <span style={{marginLeft: '10px'}}>{location}</span>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <Icon url="/user/user.png" width={11} height={11} />
                <span style={{marginLeft: '10px', fontSize: '11px'}}>{reach}</span>
            </div>
            <div className="d-flex align-items-center">
                <Icon url="/user/wallet.png" width={11} height={11} style={{marginRight: '4px'}} />
                <span style={{fontSize: '12px'}}>{`${discountedPrice}k`}</span>
                <span style={{textDecoration: 'line-through', fontSize: '10px'}}>{`${pricing}k`}</span>
                <span style={{fontSize: '10px'}}>INR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdTargetCard;
