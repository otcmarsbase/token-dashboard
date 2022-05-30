import React from 'react';
import {Text} from "../atoms";
import {style} from "typestyle";

import plusIcon from '../../assets/plus.png';
import otcDeskIcon from '../../assets/otcDesk.png';
import dashboardIcon from '../../assets/dashboard.svg';
import profileIcon from '../../assets/profile.svg';
import moreIcon from '../../assets/more.svg';
import {createPortal} from "react-dom";

const VestingSplitNavbar = () => {
    const modalsRoot = document.getElementById('modals');

    if (!modalsRoot) return null;

    return createPortal(
        <div className={navbar}>
            <div className={navbarContent}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px'}}>
                    <img src={plusIcon} style={{marginBottom: '9px', height: '20px'}}/>
                    <Text colors={'red'} size={'_10'}>Create Offer</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px'}}>
                    <img src={otcDeskIcon} style={{marginBottom: '9px', height: '20px'}}/>
                    <Text colors={'gray'} size={'_10'}>OTC desk</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px'}}>
                    <img src={dashboardIcon} style={{marginBottom: '9px', height: '20px'}}/>
                    <Text size={'_10'}>Dashboard</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px'}}>
                    <img src={profileIcon} style={{marginBottom: '9px', height: '20px'}}/>
                    <Text colors={'gray'} size={'_10'}>Profile</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px'}}>
                    <img src={moreIcon} style={{marginBottom: '9px', height: '20px'}}/>
                    <Text colors={'gray'} size={'_10'}>More</Text>
                </div>
            </div>
        </div>
        , modalsRoot);
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

export default VestingSplitNavbar;