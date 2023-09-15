import { UserFlow, brandName } from "@/constants/common";
import Head from "next/head";
import { FC } from "react";
import Image from 'next/image';
import SidebarMenu from "./SidebarMenu";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/states/atom";

type PrivateLayoutProps = {
    title?: string;
    children?: JSX.Element;
    backgroundColor?: string;
    flow?: UserFlow;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ children, title, backgroundColor = "", flow = "host" }) => {
    const user = useRecoilValue(userAtom);

    return (
        <>
            <Head>
                <title>{brandName}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="d-flex">
                <SidebarMenu flow={flow} />
                <div style={{
                    background: `url(/icons/private-layout-bg.png) no-repeat`,
                    backgroundSize: '100%',
                    width: '2000px',
                    overflowY: 'scroll',
                    backgroundAttachment: 'scroll',
                    right: '0px',
                    marginLeft: '250px',
                    padding: '46px',
                }}>
                    <div className="d-flex justify-content-between">
                        {!!title?.length ? <p className="text-white">{title}</p> : <div />}
                        <div className="d-flex align-items-center gap-4">
                            <div className="d-flex align-items-start gap-2 text-center text-decoration-none">
                                <Image
                                    priority
                                    src="/icons/user.svg"
                                    alt="Follow us on Twitter"
                                    style={{
                                    }}
                                    height={25}
                                    width={25}
                                />
                                <p className="text-white">{user?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor }}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivateLayout;
