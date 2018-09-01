import React, {Component} from 'react';

import TimeAgo from 'react-timeago';
import 'font-awesome/css/font-awesome.min.css';

const styles = {
    my: {
        divStyle: {
            marginLeft: '50px'
        },
        mainDiv: {
            display: 'block',
            float: 'right',
            marginRight: '20px',
        },
        tagStyles: {
            //float: 'right',
            textAlign: 'right',
            paddingRight: '30px',
        },
        timeStyles: {
            textAlign: 'right',
        }
    },
    other: {
        image: {

        },
        divStyle: {
            marginRight: '30px',
            backgroundColor: '#7a7a7a',
            color: '#fff',
        },
        tagStyles: {
            
        }
    }
}





export class MessageElement extends Component{
    render(){

        let messageStyles = null;
        let image =null;

        let icon = null;

        if(this.props.status){
            switch(this.props.status){
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

        if(this.props.myUserName){
            if(this.props.myUserName === this.props.sender){
                messageStyles = styles.my;
            }else{
                messageStyles = styles.other;
                image=(
                    <img 
                        src={this.props.profileImage}
                        alt=""
                        style={{
                            marginLeft: "5px",
                            boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)",
                        }} 
                        width="30px"
                        height="30px"
                    />
                )
            }
            return(
                <div style={{...messageStyles.mainDiv, marginLeft:"10px", paddingRight: '0px'}}>
                    <div 
                        style={{
                            width: '100%', 
                            paddingTop: '10px',
                            display: 'flex', 
                            paddingBottom: '10px', 
                            alignItems: 'center', 
                        }}
                    >
                        <div className="d-none d-md-block" styles={messageStyles.image}>
                            {image}
                        </div>
                        <div>
                            <div 
                                style={{
                                    width: '100%',
                                    marginLeft: '20px',
                                    color: '#e8232d',
                                    ...messageStyles.tagStyles
                                }} 
                            >
                                {this.props.tag}
                            </div>
                            <div style={{display: 'flex'}}>
                                <div 
                                    style={{
                                        borderRadius: '5px',
                                        marginLeft: '20px',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        paddingLeft: '20px',
                                        paddingRight: '20px',
                                        boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                                        ...messageStyles.divStyle, 
                                    }}
                                >
                                    {this.props.message}
                                </div>
                            </div>
                            <div 
                                style={{
                                    marginLeft: '20px',
                                    color: '#7a7a7a',
                                    ...messageStyles.timeStyles
                                }}
                            >
                                {icon}&nbsp;&nbsp;
                                <TimeAgo 
                                    minPeriod={10} 
                                    style={{
                                        margin: '0px', 
                                        color:'#7a7a7a', 
                                        fontSize: '12px',
                                    }}
                                    date={this.props.time}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}