import React from 'react';
import {Text} from "../atoms";
import {style} from "typestyle";

const VestingSplitNavbar = () => {
    return (
        <div className={navbar}>
            <div className={navbarContent}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{marginBottom: '9px'}}>icon</span>
                    <Text colors={'red'} size={'_10'}>Create Offer</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{marginBottom: '9px'}}>icon</span>
                    <Text size={'_10'}>OTC desk</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{marginBottom: '9px'}}>icon</span>
                    <Text size={'_10'}>Dashboard</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{marginBottom: '9px'}}>icon</span>
                    <Text size={'_10'}>Profile</Text>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{marginBottom: '9px'}}>icon</span>
                    <Text size={'_10'}>More</Text>
                </div>
            </div>
        </div>
    );
};

const navbar = style({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,

    height: '80px',
    backgroundColor: 'black',
    width: '100%',
    borderTop: '2px solid rgba(42, 42, 44, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const navbarContent = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
})

export default VestingSplitNavbar;