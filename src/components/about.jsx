import React from 'react';
import home1 from '../img/home1.png';
import {Container, Description, Image, Hide} from '../styles.js';

const About=()=>{

    return(
        <Container>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>Your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videography 
                    have professional with amazing skills.
                </p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy" />
            </Image>
        </Container>

    )
};



export default About;