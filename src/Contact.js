import React from 'react';

// import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoBox, MarkerWithLabel} from "react-google-maps";
import './css/App.css';
// const {compose} = require("recompose");
export const Contact = ({NavBar}) => {
return (
< section id = 'contact' >
        <div className='row match-my-cols full-page'>
            <div className='col-xs-12 col-md-5 col-sm-12 col-lg-4 background-blue'>
                {/* <ParticlesBackground /> */}
                <p className='title'>Contacto</p>
            </div>
            <div className='contactme col-xs-12 col-md-7 col-sm-12 col-lg-8 '>
                <FormContact />
            </div>
        </div>
        </section>
    )
}
const FormContact = () => {
    return(
        <div className="map-responsive">
     {/* <iframe width="100%" height="320px;" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" allowFullScreen></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61231.48904855257!2d-71.57590705942228!3d-16.426448188621674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424aab736b2447%3A0x2b9ede870b237549!2sJacobo+Hunter!5e0!3m2!1ses!2spe!4v1512760151438" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7098.94326104394!2d78.0430654485247!3d27.172909818538997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1385710909804" width="600" height="450" frameborder="0" style={{border:0}}></iframe> */}
            <ul className='informationPersonal'>
                <li className="floating-box">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> <br/>
                    <h3>mariley2018 @ gmail.com</h3>
                </li>
                <li className="floating-box">
                    <img className='flag-marke' src='img/peru.svg' />
                    <h3>Arequipa, Peru</h3>
                </li>
                
            </ul>
        </div>
    )
}


// const MapWithAMarkerWithLabel = compose(
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <MarkerWithLabel
//       position={{ lat: -34.397, lng: 150.644 }}
//       labelAnchor={new google.maps.Point(0, 0)}
//       labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
//     >
//       <div>Hello There!</div>
//     </MarkerWithLabel>
//   </GoogleMap>
// );