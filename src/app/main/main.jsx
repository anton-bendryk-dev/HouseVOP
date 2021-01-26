import React from 'react';
import ResidentialComplexDescription from './rc-description/rc';
import ResidentialComplexFlats from './rc-flats/rcFlats.jsx';
import FeedBackContainer from './fb-container/fb.jsx';
import VideoPlayer from './vp-container/vp.jsx';
const Main = () => {
    return(
        <main>
            <section>
                <ResidentialComplexDescription/>
            </section>
            <section>
                <ResidentialComplexFlats/>
            </section>
            <section>
                <FeedBackContainer/>
            </section>
            <section>
                <VideoPlayer/>
            </section>
            <section>
                <div className="map-container"></div>
            </section>
            <section>
                <div className="feedback-container"></div>
            </section>
        </main>
    )
}

export default Main