import React from 'react';
import Logo from '../style/images/HouseVOP.png';
import ScrollAnimation from 'react-animate-on-scroll';
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
                        <div className="col-w20"><a href="/">О комплексе</a></div>
                        <div className="col-w20"><a href="/">Район</a></div>
                        <div className="col-w20"><a href="/">Каталог квартир</a></div>
                        <div className="col-w20"><a href="/">Ипотека</a></div>
                        <div className="col-w20"><a href="/">Контакты</a></div>
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