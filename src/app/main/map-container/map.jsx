import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div className="marker"><span></span>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.61,
      lng: 33.51
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={44.6155189}
            lng={33.5164313}
            text="HouseVOP"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;