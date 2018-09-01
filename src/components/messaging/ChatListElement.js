import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const ChatListElement = (props) => {
    let sender = null;
    let icon = null;

    if(props.myUserName === props.lastMessage.sender){
        sender = "You "
    }else{
        sender = props.lastMessage.sender
    }

    if(props.lastMessage){
        switch(props.lastMessage.status){
            case "read":
                icon = (<i style={{color: '#e8232d'}} className="fa fa-check-square"/>)
                break;
            case "delivered":
                icon = (<i style={{color: '#e8232d'}} className="fa fa-check"/>)
                break;
            case "sending":
                icon = (<i className="fa fa-spinner fa-spin"/>)
                break;
            case "sent":
                icon = (<i className="fa fa-check"/>)
                break;
            default: 
                break;
        }
    }

    return(
        <div className="chatListElemClass" style={{width: '100%'}} onClick={() => {props.openChatFunc(props.id)}}>
            <div style= {{display: 'flex'}}>
                <div>
                    <img 
                        src={props.profileImage}
                        alt=""
                        style={{
                            marginRight: "5px",
                            boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                        }} 
                        width="50px"
                        height="50px"
                    />
                </div>
                <div style={{whiteSpace: 'nowrap', paddingLeft: '5px'}}>
                    <span>
                        <span>
                            <b style={{fontSize: '0.9em'}}>{props.name}</b>
                        </span>
                        <br/>
                        <span style={{color: '#7a7a7a', fontSize: '14px'}}>
                            {icon}&nbsp;{sender}: {props.lastMessage.message}
                        </span>
                    </span>
                </div>
            </div>
            <hr style={{marginTop: "10px", marginBottom:"0px", paddingBottom: '0px'}}/>
        </div>
    )
}