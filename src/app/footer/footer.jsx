import React from 'react';
import LogoComponent from '../header/logo.jsx';
const Footer = () => {
    return(
        <footer>
            <div className="content-section">
                <div className="inline-footer">
                    <div className="footer-box">
                        <LogoComponent/>
                    </div>
                    <div className="footer-box">
                        <div className="footer-box-menu">
                            <a href="/">О комплексе</a>
                            <a href="/">Район</a>
                            <a href="/">Каталог квартир</a>
                            <a href="/">Ипотека</a>
                            <a href="/">Контакты</a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="footer-box-menu">
                            <a href="/">О комплексе</a>
                            <a href="/">Район</a>
                            <a href="/">Каталог квартир</a>
                            <a href="/">Ипотека</a>
                            <a href="/">Контакты</a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="footer-box-menu">
                            <p>Капитанская улица, 2</p>
                            <p>Телефон: +38(066)358-64-95</p>
                            <p>Отдел продаж: 10:00 - 20:00</p>
                            <p>E-mail: vip@housevip.ua</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer