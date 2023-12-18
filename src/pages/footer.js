import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

// imports all images and icons
import Icons from "../assets/icons/oriyo.png";
import '../assets/scss/pages/footer.scss';


function Footer () {

    useEffect(() => {
        const wave1 = document.getElementById('wave1');
        const wave2 = document.getElementById('wave2');
        const wave3 = document.getElementById('wave3');
        const wave4 = document.getElementById('wave4');

        const onScroll = () => {
            const offset = window.scrollY;
            wave1.style.backgroundPositionX = `${400 + offset * 4}px`;
            wave2.style.backgroundPositionX = `${300 + offset * -4}px`;
            wave3.style.backgroundPositionX = `${200 + offset * 2}px`;
            wave4.style.backgroundPositionX = `${100 + offset * -2}px`;
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };

    }, []);

    return (
        <footer>
            <ul className="footer--wave">
                <li className="wave" id="wave1" style={{ '--i': '1' }} />
                <li className="wave" id="wave2" style={{ '--i': '2' }} />
                <li className="wave" id="wave3" style={{ '--i': '3' }} />
                <li className="wave" id="wave4" style={{ '--i': '4' }} />
            </ul>

            <div className="footer--content">
                <div className="icons">
                    <img src={ Icons } alt="img-icon"/>
                </div>
                <ul className="logo">
                    <li className="space"></li>
                    <li className="letter"><span> O </span></li>
                    <li className="letter mt-5"><span> r </span></li>
                    <li className="letter pt-5"><span> i </span></li>
                    <li className="letter mt-5"><span> y </span></li>
                    <li className="letter--icons"><img src={ Icons } alt="img-icon"/></li>
                    <li className="letter"><span> s </span></li>
                    <li className="letter mt-5"><span> o </span></li>
                    <li className="letter pt-5"><span> f </span></li>
                    <li className="letter pt-5 mt-5"><span> t </span></li>
                    <li className="space"></li>
                </ul>

                <ul className="social-icons">
                    <li className="space"></li>
                    <li><i className="bi bi-facebook" aria-hidden="true"></i></li>
                    <li><i className="bi bi-twitter" aria-hidden="true"></i></li>
                    <li><i className="bi bi-instagram" aria-hidden="true"></i></li>
                    <li><i className="bi bi-linkedin" aria-hidden="true"></i></li>
                    <li className="space"></li>
                </ul>

                <ul className="footer--menu">
                    <li className="space"></li>
                    <HashLink smooth to="/#home">
                        <li><span> Home </span></li>
                    </HashLink>
                    <HashLink smooth to="/#about">
                        <li><span> About </span></li>
                    </HashLink>
                    <HashLink smooth to="/#service">
                        <li><span> Service </span></li>
                    </HashLink>
                    <HashLink smooth to="/#team">
                        <li><span> Team </span></li>
                    </HashLink>
                    <HashLink smooth to="/#contact">
                        <li><span> Contact </span></li>
                    </HashLink>
                    <HashLink smooth to="/#cookies">
                        <li><span> Cookies </span></li>
                    </HashLink>
                    <li className="space"></li>
                </ul>

                <h6 className="footer--copyright">
                    © 2023 www.oriyosoft.com. All right reserved.
                </h6>
            </div>
        </footer>
    );

}

export default Footer;
