import React from 'react';
import ResidentialComplexDescription from './rc-description/rc';
import ResidentialComplexFlats from './rc-flats/rcFlats.jsx';
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
                <div className="feedback-container"></div>
            </section>
            <section>
                <div className="video-player-container"></div>
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