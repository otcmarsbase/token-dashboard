import React, {FC, useContext} from 'react';
import {style} from "typestyle";
import {Text} from '../atoms/Text';
import doneIcon from '../../assets/doneIcon.png'
import errorIcon from '../../assets/errorIcon.png'
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";
import {NotificationsProps} from "./types";
import Container from "../Container";
import {DictionaryContext} from "../../contexts/DictionaryContext";

const Notification: FC<NotificationsProps> = ({type}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet)
    const isPc = (!isMobile && !isTablet);

    return (
        <div className={container(type, isMobile)}>
            <Container>
                <div style={{marginRight: '12px'}}>
                    <img style={{height: '24px'}} src={type === 'success' ? doneIcon : errorIcon}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'start', flex: 1}}>
                    <Text weight={'semiBold'}>Done</Text>
                    {isPc && (
                        <Text>Every time after using Mars Base, we recommend you to disconnect.</Text>
                    )}
                </div>
                <div>
                    <Text weight={'semiBold'}>X</Text>
                </div>
            </Container>
        </div>
    );
};

type NotificationLocalizedProps = Omit<NotificationsProps, "title" | "subTitle">

export const NotificationLocalized: FC<NotificationLocalizedProps> = (props) => {
    const {nft} = useContext(DictionaryContext);

    return <Notification
        type={props.type}
        title={nft.dashboard.notifications[props.type].title}
        subTitle={nft.dashboard.notifications[props.type].subTitle}
    />
}

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