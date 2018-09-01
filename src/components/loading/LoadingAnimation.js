import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../animations/food_orders/data.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

export const LoadingAnimation = (props) => {
    return(
        <Lottie options={defaultOptions}
            height={props.height}
            width={props.width}
        />
    )
}