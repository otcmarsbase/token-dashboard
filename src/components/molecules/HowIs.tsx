import React from 'react';
import {style} from "typestyle";
import {Text} from '../atoms';
import cosmonaut from '../../assets/cosmonautpng.png';

const HowIs = () => {
    return (
        <div className={container}>
            <div className={content}>
                <Text title={'_2'}>How is distribution done?</Text>
                <span style={{display: 'block',marginBottom: '6px'}}/>
                <Text colors={'gray'} size={'_12'}>For the first time, a crypto OTC desk and even</Text>
                <div className={styledVideo}/>
            </div>
        </div>
    );
};

const container = style({
    height: '',
    backgroundColor: 'rgba(152,81,255,0.2)',
    borderRadius: '16px',
    backgroundImage: `url(${cosmonaut})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right'
})

const content = style({
    padding: '20px'
})

const styledVideo = style({
    width: '180px',
    height: '108px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginTop: '18px',
    borderRadius: '16px',
})

export default HowIs;