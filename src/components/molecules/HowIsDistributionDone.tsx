import React, {FC, ReactNode, useContext} from 'react';
import {style} from "typestyle";
import {Text} from '../atoms/Text';
import cosmonaut from '../../assets/cosmonautpng.png';
import {DictionaryContext} from "../../contexts/DictionaryContext";
import {Queries, useMediaQuery} from "../../hooks/mediaQuery";

interface HowIsProps {
    title: ReactNode;
    subTitle: ReactNode;
}

const HowIsDistributionDone: FC<HowIsProps> = ({title, subTitle}) => {
    const isMobile = useMediaQuery(Queries.mobile);
    const isTablet = useMediaQuery(Queries.tablet);

    const isDesktop = (!isMobile && !isTablet);

    if (!isDesktop) {
        return null;
    }

    return (
        <div className={wrapper}>
            <div className={container}>
                <div className={imageContainer}>
                    <div className={content}>
                        <Text title={'_2'}>{title}</Text>
                        <span style={{display: 'block',marginBottom: '6px'}}/>
                        <Text colors={'gray'} size={'_12'}>{subTitle}</Text>
                        <video controls className={styledVideo}>
                            <source src=""/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

const wrapper = style({
    // padding: '20px',
    // marginBottom: '80px'
})

const imageContainer = style({
    backgroundImage: `url(${cosmonaut})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
})

const container = style({
    background: `linear-gradient(45deg, rgba(46,23,19,1) 0%, rgba(31,20,43,1) 100%)`,
    borderRadius: '16px',
})

const content = style({
    padding: '20px'
})

const styledVideo = style({
    width: '200px',
    height: '108px',
    marginTop: '18px',
    borderRadius: '16px',
    zIndex: 2
})

export const HowIsLocalized = () => {
    const {nft} = useContext(DictionaryContext);

    return <HowIsDistributionDone title={nft.dashboard.distribution_video.header} subTitle={nft.dashboard.distribution_video.description}/>
}
