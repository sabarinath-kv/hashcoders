import { FC } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Icon from './Icon';
import { useRouter } from 'next/router';
import Image from 'next/image';

type SidebarMenuParams = {
    flow:  "user" | "host";
};

const SidebarMenu: FC<SidebarMenuParams> = ({flow}: SidebarMenuParams) => {
    const { push } = useRouter();
    const hostMenuItemArray = [
        {name: 'Dashboard', icon: '/icons/dashboard.png', page: '/host/home', width: 30, height: 30},
        {name: 'Create Listing', icon: '/icons/create-listing.png', page: '/host/create-listing'},
        {name: 'Current Booking', icon: '/icons/view-listing.png', page: '/host/current-booking'},
        {name: 'Analysis', icon: '/icons/analysis.png', page: '/host/home'},
        {name: 'Logout', icon: '/icons/logout.png', page: '/', width: 30, height: 30}
    ];

    const userMenuItemArray = [
        {name: 'Dashboard', icon: '/icons/dashboard.png', page: '/user/home', width: 30, height: 30},
        {name: 'Choose Spots', icon: '/icons/create-listing.png', page: '/host/create-listing'},
        {name: 'Upload Media', icon: '/icons/view-listing.png', page: '/host/current-booking'},
        {name: 'Analysis', icon: '/icons/analysis.png', page: '/host/create-listing'},
        {name: 'Logout', icon: '/icons/logout.png', page: '/', width: 30, height: 30}
    ];

    const menuItemArray = flow === 'host' ? hostMenuItemArray : userMenuItemArray;

    return (
        <Sidebar rootStyles={{minHeight: '89vh', position: 'fixed', bottom: 0, top: 0,
        boxShadow: '0px 0px 32px 0px rgba(136, 152, 170, 0.15)'}}>
            <Image
                src={'/adhere.png'} 
                alt="ADHere" 
                style={{margin: 20, cursor: 'grab', alignSelf: 'center'}} 
                width={158} 
                height={75} 
                onClick={() => push(flow === 'host' ? '/host/home' : '/user/dashboard')} />
            <Menu>
                {menuItemArray?.map(((item, index) => (
                    <MenuItem 
                        key={index}
                        onClick={() => push(item?.page)}
                        icon={(<Icon url={item?.icon} width={item?.width} height={item?.height} />)}
                    >
                        {item?.name}
                    </MenuItem>
                )))}
            </Menu>
        </Sidebar>
    );
};

export default SidebarMenu;
