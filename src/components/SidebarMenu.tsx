import { FC } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Icon from './Icon';
import { useRouter } from 'next/router';

const SidebarMenu: FC = () => {
    const menuItemArray = [
        {name: 'Dashboard', icon: '/icons/dashboard.png', page: '/host/create-listing', width: 30, height: 30},
        {name: 'Create Listing', icon: '/icons/create-listing.png', page: '/host/create-listing'},
        {name: 'Current Booking', icon: '/icons/view-listing.png', page: '/host/current-booking'},
        {name: 'Analysis', icon: '/icons/analysis.png', page: '/host/create-listing'},
        {name: 'Logout', icon: '/icons/logout.png', page: '/host/create-listing', width: 30, height: 30}
    ];
    const { push } = useRouter();
    return (
        <Sidebar rootStyles={{minHeight: '89vh', position: 'fixed', bottom: 0, top: 0,
        boxShadow: '0px 0px 32px 0px rgba(136, 152, 170, 0.15)'}}>
            <h4 style={{margin: 20}}>ADHere</h4>
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
