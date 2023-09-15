import { Listing, UnitType, UserAd, UserFlow, defaultListings } from "@/constants/common";
import { atom } from "recoil";

export const userAtom = atom<{
    name: string;
    phoneNumber: string;
} | null>({
    key: 'user',
    default: null
});

export const listingAtom = atom<Listing[]>({
    key: 'listing',
    default: defaultListings
});

export const targetAdIdListAtom = atom<number[]>({
    key: 'targetAdId',
    default: []
});

export const userFlowAtom = atom<UserFlow>({
    key: 'userFlow',
    default: "host"
})
export const adListAtom = atom<UserAd[]>({
    key: 'adList',
    default: [{
            imageUrl: '/user/Thumbnail.png',
            title: 'Metro-BillBoard-1',
            rating: 4,
            type: UnitType.METROS,
            location: 'Kochi Metro',
            reach: 1.3,
            discount: 15,
            pricing: 126,
            isSponsored: false,
            id: 12,
            activeDays: 20
    }]
});

export const selectedUnitTypeAtom = atom<UnitType | null>({
    key: 'selectedUnitType',
    default: null
});
