import React from 'react';
import Logo from '../style/images/HouseVOP.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
    return(
        <header>
            <div className="content-section">
                <div className="inline-header">
                    <div className="col-w20"><a href="/" className="logo">
                        <img src={Logo} alt="Logo"></img>
                        <p>ЖИЛОЙ КОМПЛЕКС</p>
                    </a></div>
                    <div className="col-w50 navigation-container">
                        <div className="col-w20">
                        <Link activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}>О комплексе</Link></div>
                                <div className="col-w20">
                        <Link activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}>Район</Link></div>
                                <div className="col-w20">
                        <Link activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}>Каталог квартир</Link></div>
                                <div className="col-w20">
                        <Link activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}>Ипотека</Link></div>
                            <div className="col-w20">
                        <Link activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}>Контакты</Link></div>
                    </div>
                </div>
                <div className="title-container">
                    <h1>Жилой комплекс в историческом центре</h1>
                    <ScrollAnimation animateIn="animate__fadeInUp">
                        <span className="mouse"></span>
                    </ScrollAnimation>
                </div>
                <div className="contacts-container">
                    <div className="address"><span></span>Наб. реки Фонтанки 10-15</div>
                    <div className="phone"><span></span>8 (812) 123-45-67</div>
                </div>
            </div>
        </header>
    )
}

export default Header