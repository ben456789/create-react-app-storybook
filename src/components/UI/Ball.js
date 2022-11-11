import React from "react";
import BallContent from './BallContent'

import background from '../../images/8ball.png';

import classes from './Ball.module.scss';



const Ball = props => {
    console.log(props.Answers)
    return(
        <div className={classes.ball} style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
        }}>
            <BallContent />
        </div>
    );
};

export default Ball;