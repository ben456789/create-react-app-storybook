import React from "react";

import classes from './BallContent.module.scss'
import background from '../../images/fluid.jpg';

import BallResponse from './BallResponse'

const BallContent = props => {
    return (
        <div className={classes.ballContent} style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
        }}>
            <BallResponse items={props.Answers} />
        </div>
    );
};

export default BallContent;