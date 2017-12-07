import React from 'react';
import './css/App.css';

export const Contact = ({NavBar}) => {
return (
< section id = 'contact' >
        <div id='contact' className='row match-my-cols full-page'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4 background-blue'>
                {/* <ParticlesBackground /> */}
                <p className='title'>Contacto</p>
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 aboutme'>
                <FormContact />
            </div>
        </div>
        </section>
    )
}
const FormContact = () => {
    return(
        <div>
            <form className="form-group form-input" action="mailto:mariley2018@gmail.com" method="post">
                <div className="line-vertical"></div>
                <div className="input-group">
                    <input className="input-text" type="text" placeholder="Full Name" />
                    <span ></span>
                </div>

                <div className="input-group">
                    <input type="email" className="input-text" placeholder="Your Email" />
                </div>
                <div className="input-group">
                    <input type="tel" className="input-text" placeholder="your Phone" />
                </div>
                <div className="input-group">
                    <textarea className="input-text" placeholder="your message"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
        </div>
    )
}