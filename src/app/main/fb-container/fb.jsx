// FEEDBACK CONTAINER
import React from 'react';
import FeedBackForm from '../feedback-form/ff.jsx';

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
                        <FeedBackForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeedBackContainer