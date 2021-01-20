import React from 'react';
import flat1 from '../../style/images/flat1.png';
import flat2 from '../../style/images/flat2.png';
const ResidentialComplexFlats = () => {
    return(
        <div id="section2">
            <span className='number-container2'>III</span>
            <div className="inline-wrapper rc-flats-container">
                <div className="content-section">
                    <h2>Наши квартиры</h2>
                    <div className="flats-container">
                        <div className="flat-box">
                            <img src={flat1} alt='flat'></img>
                            <h4>Лофт — 2 этажа</h4>
                        </div>
                        <div className="flat-box">
                            <img src={flat2} alt='flat'></img>
                            <h4>Лофт — 1 этаж</h4>
                        </div>
                        <div className="flat-box">
                            <img src={flat1} alt='flat'></img>
                            <h4>Лофт — 2 этажа</h4>
                        </div>
                        <div className="flat-box">
                            <img src={flat2} alt='flat'></img>
                            <h4>Лофт — 1 этаж</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResidentialComplexFlats