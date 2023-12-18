import React, { useState } from 'react';
import '../assets/scss/pages/team.scss';

import Bamba01 from '../assets/images/bamba1.jpg';
import Bamba02 from '../assets/images/bamba3.jpg';

import Manna01 from '../assets/images/PF01.jpg';
import Manna02 from '../assets/images/PF04.jpg';


function Team () {

    return (
        <section className='team' id='team'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F1C21B" fill-opacity="1" d="M0,96L34.3,101.3C68.6,107,137,117,206,106.7C274.3,96,343,64,411,53.3C480,43,549,53,617,69.3C685.7,85,754,107,823,106.7C891.4,107,960,85,1029,64C1097.1,43,1166,21,1234,48C1302.9,75,1371,149,1406,186.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <div className='header'>
                <span>
                    We are a team of youthful professionals in Web Development, Networking and Digital Marketing domain.
                </span>
            </div>
            <svg className='svg--one' width="400" height="300" viewBox="0 0 175 175" xmlns="http://www.w3.org/2000/svg">
                <path fill="rgb(224, 237, 238)" d="M45.7,-62.9C61.1,-51.8,76.7,-40.9,81.8,-26.3C86.8,-11.7,81.4,6.5,73.1,21.2C64.8,35.9,53.5,47,40.9,54.7C28.2,62.3,14.1,66.4,0.2,66.2C-13.7,65.9,-27.5,61.3,-42,54.3C-56.6,47.3,-71.9,37.8,-72.7,25.9C-73.5,13.9,-59.8,-0.5,-54.3,-17.8C-48.9,-35.1,-51.8,-55.2,-44.1,-68.9C-36.5,-82.5,-18.2,-89.8,-1.5,-87.6C15.2,-85.5,30.4,-74.1,45.7,-62.9Z" transform="translate(100 100)" />
            </svg>

            <svg className='svg--two' width="400" height="300" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F1C21B" d="M45.7,-62.9C61.1,-51.8,76.7,-40.9,81.8,-26.3C86.8,-11.7,81.4,6.5,73.1,21.2C64.8,35.9,53.5,47,40.9,54.7C28.2,62.3,14.1,66.4,0.2,66.2C-13.7,65.9,-27.5,61.3,-42,54.3C-56.6,47.3,-71.9,37.8,-72.7,25.9C-73.5,13.9,-59.8,-0.5,-54.3,-17.8C-48.9,-35.1,-51.8,-55.2,-44.1,-68.9C-36.5,-82.5,-18.2,-89.8,-1.5,-87.6C15.2,-85.5,30.4,-74.1,45.7,-62.9Z" transform="translate(100 100)" />
            </svg>
            <div id="card--container" className='card--container'>
                <div className='row'>
                    <Bamba />
                    <Manna />
                </div>
                <div className='row'>
                    <Manna />
                    <Bamba />
                </div>
            </div>
            <svg className='svg--three' width="500" height="400" viewBox="0 0 150 160" xmlns="http://www.w3.org/2000/svg">
                <path fill="#24A148" d="M31,-47.1C45.3,-39.1,65.6,-39.1,66.8,-31.9C68,-24.6,50.1,-10,45.6,5C41,20,49.9,35.4,47.8,46.1C45.8,56.7,32.9,62.5,21.6,59.1C10.4,55.8,0.7,43.3,-6.2,34.9C-13,26.6,-17,22.4,-24.8,18.6C-32.6,14.8,-44.1,11.4,-51.9,3.2C-59.6,-5,-63.7,-17.9,-58.2,-25.2C-52.8,-32.5,-37.8,-34.1,-26.6,-43.4C-15.3,-52.8,-7.6,-70,0.4,-70.5C8.4,-71.1,16.7,-55.1,31,-47.1Z" transform="translate(100 100)" />
            </svg>
            <svg className='svg--five' width="450" height="350" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F1C21B" d="M38.5,-52.2C51.2,-43.7,63.9,-34.3,69.4,-21.6C74.9,-8.9,73.1,7.1,69.1,23.3C65,39.5,58.7,55.8,46.8,63.9C34.9,72,17.5,71.8,4.5,65.6C-8.5,59.5,-17.1,47.4,-32.4,40.4C-47.7,33.5,-69.7,31.6,-80.9,20.7C-92,9.9,-92.3,-10.1,-85.3,-26.5C-78.3,-42.8,-64,-55.6,-48.5,-63.3C-33.1,-70.9,-16.6,-73.4,-1.9,-70.9C12.8,-68.3,25.7,-60.7,38.5,-52.2Z" transform="translate(100 100)" />
            </svg>
        </section>
    );

}

function Bamba () {

    const [ display, setDisplay ] = useState (false);
    const [ open, setOpen ] = useState (false);
    const [ show, setShow ] = useState (false);

    const toggleDisplay = () => {
        setDisplay (!display);
    }

    const toggleOpen = () => {
        setOpen (!open);
    }

    const toggleShow = () => {
        setShow (!show);
    }

    return (
        <div className='profile--card'>
            <div className='imgBox'>
                <div className='before--rotate'>
                    <img src={ Bamba01 } alt='elon--img' />
                    <h2> Ras Bamba <br />
                        <span> Co-founder </span>
                    </h2>
                </div>
                <div className='after--rotate'>
                    <ul className='social-icons'>
                        <li className='submenu'>
                            <div>
                                <i className="bi bi-grid-3x3-gap" onClick={ toggleShow } aria-hidden='true'></i>
                            </div>
                            {
                                show ? ( <div className='sidemenu'> <span> CheckProfile </span> </div> ) : null
                            }
                        </li>
                        <li className='space'></li>
                        <li><i className="bi bi-facebook" aria-hidden='true'></i></li>
                        <li><i className="bi bi-instagram" aria-hidden='true'></i></li>
                        <li><i className="bi bi-linkedin" aria-hidden='true'></i></li>
                        <li><i className="bi bi-twitter" aria-hidden='true'></i></li>
                        <li className='space'></li>
                        <li className='submenu'>
                            <div>
                                <i className="bi bi-telephone-inbound" onClick={ toggleOpen } aria-hidden='true'></i>
                            </div>
                            {
                                open ? ( <div className='sidemenu'> +358(0) </div> ) : null
                            }
                        </li>
                        <li className='submenu'>
                            <div>
                                <i className="bi bi-envelope" onClick={ toggleDisplay } aria-hidden='true'></i>
                            </div>
                            {
                                display ? ( <div className='sidemenu'> info.bamba@gmail.com </div> ) : null
                            }
                        </li>
                    </ul>
                    <img src={ Bamba02 } alt='elon--img' />
                </div>
            </div>

            <div className='details'>
                <div className='content'>
                    <h4>
                        <i className="bi bi-quote"></i> <br />
                        <span> I am Bamba...<br /> Photography is my passion. I also enjoy creating content for digital media. </span> <br />
                        <i className="bi bi-three-dots"></i>
                    </h4>
                </div>
            </div>
        </div>
    );

}

function Manna () {

    const [ display, setDisplay ] = useState (false);
    const [ open, setOpen ] = useState (false);
    const [ show, setShow ] = useState (false);

    const toggleDisplay = () => {
        setDisplay (!display);
    }

    const toggleOpen = () => {
        setOpen (!open);
    }

    const toggleShow = () => {
        setShow (!show);
    }

    return (
        <div className='profile--card'>
            <div className='imgBox'>
                <div className='before--rotate'>
                    <img src={ Manna01 } alt='elon--img' />
                    <h2> Manna Barua <br />
                        <span> Full-stack </span>
                    </h2>
                </div>
                <div className='after--rotate'>
                    <ul className='social-icons'>
                        <li className='submenu'>
                            <div>
                                <i className="bi bi-grid-3x3-gap" onClick={ toggleShow } aria-hidden='true'></i>
                            </div>
                            {
                                show ? ( <div className='sidemenu'> <span> CheckProfile </span> </div> ) : null
                            }
                        </li>
                        <li className='space'></li>
                        <li><i className="bi bi-facebook" aria-hidden='true'></i></li>
                        <li><i className="bi bi-instagram" aria-hidden='true'></i></li>
                        <li><i className="bi bi-linkedin" aria-hidden='true'></i></li>
                        <li><i className="bi bi-twitter" aria-hidden='true'></i></li>
                        <li className='space'></li>
                        <li className='submenu'>
                            <div>
                                <i className="bi bi-telephone-inbound" onClick={ toggleOpen } aria-hidden='true'></i>
                            </div>
                            {
                                open ? ( <div className='sidemenu'> +358(0)417412915 </div> ) : null
                            }
                        </li>
                        <li className='submenu'>
                            <div>
                                <i className="bi bi-envelope" onClick={ toggleDisplay } aria-hidden='true'></i>
                            </div>
                            {
                                display ? ( <div className='sidemenu'> info.manna@gmail.com </div> ) : null
                            }
                        </li>
                    </ul>
                    <img src={ Manna02 } alt='elon--img' />
                </div>
            </div>

            <div className='details'>
                <div className='content'>
                    <h4>
                        <i className="bi bi-quote"></i> <br />
                        <span> I am Manna...<br /> Fullstack JavaScript enthusiast. I also enjoy Travelling and Cooking. </span> <br />
                        <i className="bi bi-three-dots"></i>
                    </h4>
                </div>
            </div>
        </div>
    );

}

export default Team;