import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {Container, Description, Image} from '../styles.js';
import styled from 'styled-components';


const Service = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm}/>
                            <h3>diaphragm</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money}/>
                            <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </Card>
                </Cards>
            </Description>    
            <Image>
                <img src={home2} />
            </Image>
        </Services>
    )
};

const Services=styled(Container)`
    h2{
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding:2rem 0rem 4rem 0rem;
    }
`;

const Cards=styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Card=styled.div`
    flex-basis:15rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:white;
            color:black;
            padding:1rem;
        }
    }
`;
export default Service;