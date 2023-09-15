import { Listing, SupportedFormat, UnitType, UserFlow, defaultListings } from "@/constants/common";
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