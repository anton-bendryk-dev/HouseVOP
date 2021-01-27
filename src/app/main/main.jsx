import React from "react";
import ResidentialComplexDescription from "./rc-description/rc";
import ResidentialComplexFlats from "./rc-flats/rcFlats.jsx";
import FeedBackContainer from "./fb-container/fb.jsx";
import VideoPlayer from "./vp-container/vp.jsx";
import FeedBackForm from "./feedback-form/ff.jsx";
import SimpleMap from "./map-container/map.jsx";
const Main = () => {
  return (
    <main>
      <section>
        <ResidentialComplexDescription />
      </section>
      <section>
        <ResidentialComplexFlats />
      </section>
      <section>
        <FeedBackContainer />
      </section>
      <section>
        <VideoPlayer />
      </section>
      <section>
        <div className="map-container" id='section5'>
          <div className="content-section">
            <SimpleMap />
          </div>
        </div>
      </section>
      <section className="fcb">
        <div className="content-section fc">
          <h2>Есть вопросы?</h2>
          <div className="feedback-container-bottom">
            <FeedBackForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
