import React, {FC} from 'react';
import {style} from "typestyle";
import {createPortal} from "react-dom";
import {Text} from '../atoms/Text';
import doneIcon from '../../assets/doneIcon.png'
import errorIcon from '../../assets/errorIcon.png'
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface NotificationsProps {
    type: 'success' | 'error'
}

const Notification: FC<NotificationsProps> = ({type}) => {
    const modalsRoot = document.getElementById('modals');

    if (!modalsRoot) return null;

    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet)
    const isPc = (!isMobile && !isTablet);

    return createPortal(
        <div className={container(type, isMobile)}>
            <div className={content}>
                <div style={{marginRight: '12px'}}>{type === 'success' ? <img style={{height: '24px'}} src={doneIcon}/> :
                    <img style={{height: '24px'}} src={errorIcon}/>}</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'start', flex: 1}}>
                    <Text weight={'semiBold'}>Done</Text>
                    {isPc && (
                        <Text>Every time after using Mars Base, we recommend you to disconnect.</Text>
                    )}
                </div>
                <div>
                    <Text weight={'semiBold'}>X</Text>
                </div>
            </div>
        </div>
        , modalsRoot);
};

const container = (type: string, isMobile: boolean) => style({
    position: 'absolute',
    top: '20px',
    right: '20px',
    left: !isMobile ? 'unset' : '20px',
    zIndex: 9999,
    backgroundColor: type === 'success' ? 'rgba(52, 168, 83, 1)' : 'rgba(232, 42, 54, 1)',
    borderRadius: '6px',
    padding: '16px 26px 16px 20px',
    width: isMobile ? 'unset' : '368px',
})

const content = style({
    display: 'flex',
    alignItems: 'center'
})