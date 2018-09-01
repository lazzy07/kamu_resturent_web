import React from "react";
import {LoadingAnimation} from './LoadingAnimation';


export const LoadingScreen = (props) => {
    return(
        <div style={{display: 'flex',flexDirection: 'column', height: "100vh",alignItems: 'center', justifyContent: 'center'}}>
            <div style={{textAlign: 'center', color: '#7a7a7a'}}>
                <h2>Loading...</h2>
            </div>
            <div>
                <LoadingAnimation width="250px" height="250px"/>
            </div>
        </div>
    )
}