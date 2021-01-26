// FEEDBACK CONTAINER
import React from 'react';

const FeedBackContainer = () => {
    return(
        <div className="feedback-container">
            <div className="content-section">
                <div className="feedback-section">
                    <div className="fb-left">
                        <h2>Хотите посмотреть?</h2>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </p>
                    </div>
                    <div className="fb-right">
                        <div>
                            <div className="fb-box">
                                <div className="fb-text">
                                    <input type="text" placeholder="Ваше имя"></input>
                                </div>
                            </div>
                            <div className="fb-box">
                                <div className="fb-text">
                                    <input type="tel" placeholder="Ваш телефон"></input>
                                </div>
                            </div>
                            <div className="fb-box">
                                <p>*Мы никому не передаем ваши данные. 
                                    И не сохраняем ваш номер в базу.</p>
                            </div>
                            <div className="fb-box">
                                <div className="fb-btn">
                                    <a href="#">Посмотреть район</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeedBackContainer