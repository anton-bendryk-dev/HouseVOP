import React from 'react';
import Logo from '../style/images/HouseVOP.png';
const Header = () => {
    return(
        <header>
            <div className="inline-wrapper">
                <div className="inline-header">
                    <div className="col-w20"><a href="/" className="logo">
                        <img src={Logo}></img>
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
            </div>
        </header>
    )
}

export default Header