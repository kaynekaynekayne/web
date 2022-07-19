import React from 'react';
import home1 from '../img/home1.png';

const About=()=>{

    return(
        <section className="about">
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>Your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography 
                    have professional with amazing skills.
                </p>
                <button>Contact us</button>
                <div className="image">
                    <img src={home1} alt="" />
                </div>
            </div>
        </section>

    )
}

export default About;