import { Listing, SupportedFormat, UnitType, defaultListings } from "@/constants/common";
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