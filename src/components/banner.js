import React from 'react';

import Design from '../assets/images/screen/test4.jpg';
import Content from '../assets/images/screen/test1.jpg';
import Network from '../assets/images/screen/test2.jpeg';

const Banner = () => {
    return (
        <div className="banner">
            <div className="black--border">
                <div className="circle" />
                <div className="img-holder">
                    <img className="web-design" src={Design} alt="design-img" />
                    <img className="web-content" src={Content} alt="content-img" />
                    <img className="web-network" src={Network} alt="network-img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;