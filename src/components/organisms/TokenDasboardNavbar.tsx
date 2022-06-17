import React from 'react';
import {Text} from "../atoms/Text";
import {style} from "typestyle";

import plusIcon from '../../assets/plus.png';
import otcDeskIcon from '../../assets/otcDesk.png';
import dashboardIcon from '../../assets/dashboard.svg';
import profileIcon from '../../assets/profile.svg';
import moreIcon from '../../assets/more.svg';
import {createPortal} from "react-dom";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface INavbarMenu {
    id: number;
    text: string;
    icon: string;
    alt: string;
    color?: "red" | "blue" | "gray" | "white" | "lightGray" | undefined;
    onClick: () => void;
    active: boolean;
}

const navbarMenu: INavbarMenu[] = [
    {
        id: 1,
        text: 'Create Offer',
        icon: plusIcon,
        alt: 'Create Offer Menu Item',
        color: 'red',
        onClick: () => null,
        active: false
    },
    {
        id: 2,
        text: 'OTC desk',
        icon: otcDeskIcon,
        alt: 'OTC desk Menu Item',
        onClick: () => null,
        active: false,
    },
    {
        id: 3,
        text: 'Dashboard',
        icon: dashboardIcon,
        alt: 'Dashboard Menu Item',
        onClick: () => null,
        active: true
    },
    {
        id: 4,
        text: 'Profile',
        icon: profileIcon,
        alt: 'Profile Menu Item',
        onClick: () => null,
        active: false
    },
    {
        id: 5,
        text: 'More',
        icon: moreIcon,
        alt: 'More Menu Item',
        onClick: () => null,
        active: false
    },
]

const TokenDashboardNavbar = () => {
    const modalsRoot = document.getElementById('modals');
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);
    const isDesktop = (!isMobile && !isTablet)

    if (!modalsRoot) {
        return null;
    }

    if(isDesktop) {
        return null
    }

    return (
        <div className={navbar}>
            <div className={navbarContent}>
                {navbarMenu.map(menuItem => (
                    <div key={menuItem.id} onClick={menuItem.onClick} className={navbarItem}>
                        <img src={menuItem.icon} style={{marginBottom: '9px', height: '20px'}} alt={menuItem.alt}/>
                        <Text
                            colors={menuItem.color ? menuItem.color : menuItem.active ? 'white' : 'gray'}
                            size={'_10'}
                        >
                            {menuItem.text}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    )
};

const navbar = style({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    height: '80px',
    backgroundColor: 'black',
    width: '100%',
    borderTop: '2px solid rgba(42, 42, 44, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const navbarContent = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    maxWidth: '588px',
    margin: '0 13px'
})

const navbarItem = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60px'
})

export default TokenDashboardNavbar;