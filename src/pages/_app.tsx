import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function App({ Component, pageProps }: AppProps) {
  return (<LocalizationProvider dateAdapter={AdapterDayjs}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </LocalizationProvider >);
}
