import React, {FC, ReactNode, useContext} from 'react';
import {style} from "typestyle";
import {Text} from '../atoms/Text';
import cosmonaut from '../../assets/cosmonautpng.png';
import {DictionaryContext} from "../../contexts/DictionaryContext";

interface HowIsProps {
    title: ReactNode;
    subTitle: ReactNode;
}

const HowIs: FC<HowIsProps> = ({title, subTitle}) => {
    return (
        <div className={container}>
            <div className={imageContainer}>
                <div className={content}>
                    <Text title={'_2'}>{title}</Text>
                    <span style={{display: 'block',marginBottom: '6px'}}/>
                    <Text colors={'gray'} size={'_12'}>{subTitle}</Text>
                    <video controls className={styledVideo}>
                        <source src="URL"/>
                    </video>
                </div>
            </div>

        </div>
    );
};

const imageContainer = style({
    backgroundImage: `url(${cosmonaut})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
})

const container = style({
    background: `linear-gradient(45deg, rgba(46,23,19,1) 0%, rgba(31,20,43,1) 100%)`,
    borderRadius: '16px',
    marginTop: '90px'
})

const content = style({
    padding: '20px'
})

const styledVideo = style({
    width: '200px',
    height: '108px',
    // backgroundColor: 'rgb(18,18,18)',
    marginTop: '18px',
    borderRadius: '16px',
    zIndex: 2
})

export const HowIsLocalized = () => {
    const {nft} = useContext(DictionaryContext);

    return <HowIs title={nft.dashboard.distribution_video.header} subTitle={nft.dashboard.distribution_video.description}/>
}

export const HowIsWrapper = () => <HowIsLocalized/>