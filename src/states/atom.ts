import { atom } from "recoil";

export const userAtom = atom<{
    name: string;
    phoneNumber: string;
} | null>({
    key: 'user',
    default: null
});