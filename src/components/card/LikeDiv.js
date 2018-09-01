import React from 'react';
import TimeAgo from 'react-timeago';
import {Animated} from 'react-animated-css';

export const LikeDiv = (props) => {
    return(
        <Animated className="fadeInUp">
            <div>
                <hr/>
                <div className="row" style={{
                    width: "100%",
                    marginLeft: "10px",
                    marginRight: '10px',
                    paddingTop: '5px'
                }}>
                        <img 
                            style={{
                                marginRight: "15px",
                                boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                            }} 
                            src={props.profileImage} 
                            width="40px" 
                            height="40px"  
                            alt=""
                        />
                    <div>
                        <span style={{
                            marginBottom: "0px",
                            color: '#252525'
                        }}><b>{props.name}</b>&nbsp;&nbsp;
                        <span style={{
                            color: props.color,
                            fontSize: 12
                        }}>{props.userName}</span>
                        <br/>
                        <span style={{color:'#7a7a7a', fontSize: '14px'}}>Liked this</span>&nbsp;<TimeAgo minPeriod={10} style={{margin: '0px', color:'#7a7a7a', fontSize: '14px'}} date={props.time}/></span>
                    </div>
                </div>
            </div>
        </Animated>
    )
}