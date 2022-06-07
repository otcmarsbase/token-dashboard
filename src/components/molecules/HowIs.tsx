import React from 'react';
import {style} from "typestyle";
import {Text} from '../atoms';
import cosmonaut from '../../assets/cosmonautpng.png';

const HowIs = () => {
    return (
        <div className={container}>
            <div className={imageContainer}>
                <div className={content}>
                    <Text title={'_2'}>How is distribution done?</Text>
                    <span style={{display: 'block',marginBottom: '6px'}}/>
                    <Text colors={'gray'} size={'_12'}>For the first time, a crypto OTC desk and even</Text>
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

export default HowIs;