import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const ChatHeader = (props) => {
    return (
        <div 
            style={{
                position: 'fixed',
                width: '100%', 
                height: '50px',
                top: '50px',
                boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                backgroundColor: '#fff'
            }}
        >
            <div style={{display: 'flex'}}>
                <div className='hovarable' onClick={props.closeChat} style={{paddingTop: '10px', paddingLeft: '15px'}}>
                    <i className="fa fa-chevron-left fa-lg"/>
                </div>
                <div>
                    <img 
                        src={props.profileImage}
                        alt=""
                        style={{
                            marginLeft: "20px",
                            marginTop: '5px',
                            boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                        }} 
                        width="40px"
                        height="40px"
                    />
                </div>
                <div style={{paddingTop: '5px', paddingLeft: '15px'}}>
                    <div style={{fontWeight: 'bold', fontSize: '15px', marginBottom: '0px'}}>
                        {props.name}
                    </div>
                    <div style={{fontSize: '12px', marginTop: '0px', color: '#7a7a7a'}}>
                        {props.userName}
                    </div>
                </div>
            </div>
        </div>
    )
}