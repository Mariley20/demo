import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import './css/App.css';

export const Contact = ({NavBar}) => {
return (
< section id = 'contact' >
        <div className='row match-my-cols full-page'>
            <div className='col-xs-10 col-md-5 col-sm-4 col-lg-4 background-blue'>
                {/* <ParticlesBackground /> */}
                <p className='title'>Contacto</p>
            </div>
            <div className='contactme col-xs-11 col-md-7 col-sm-8 col-lg-8 '>
                <FormContact />
                <div className='informationPersonal'></div>
            </div>
        </div>
        </section>
    )
}
const FormContact = () => {
    return(
        <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        // <div>
        //     <form className="form-group form-input" action="mailto:mariley2018@gmail.com" method="post">
        //         <div className="line-vertical"></div>
        //         <div className="input-group">
        //             <input className="input-text" type="text" placeholder="Full Name" />
        //             <span ></span>
        //         </div>

        //         <div className="input-group">
        //             <input type="email" className="input-text" placeholder="Your Email" />
        //         </div>
        //         <div className="input-group">
        //             <input type="tel" className="input-text" placeholder="your Phone" />
        //         </div>
        //         <div className="input-group">
        //             <textarea className="input-text" placeholder="your message"></textarea>
        //         </div>
        //         <button className="btn btn-primary" type="submit">Send Message</button>
        //     </form>
        // </div>
    )
}


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -16.3988900, lng: -71.5350000 }}
  >
    <Marker
      position={{ lat: -16.3988900, lng: -71.5350000 }}
    />
  </GoogleMap>
));