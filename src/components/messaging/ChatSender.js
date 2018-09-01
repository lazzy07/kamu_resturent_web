import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

export class ChatSender extends Component{
    render() {
        return(
            <div
                style={{
                    height: "80px",
                    backgroundColor: '#fff', 
                    position: "fixed", 
                    bottom: 0,
                    boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                    width: this.props.width,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <textarea style={{width: "82%", fontSize: '14px', marginTop: '5px', marginLeft: '5px'}} rows="3" placeholder="What's up?" required></textarea>
                <div style={{width: '18%',textAlign: 'center'}}>
                    <div 
                        style={{
                            boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                            display:"inline-block",
                            padding: '10px',
                            borderRadius: '100px',
                            resize: 'none'
                        }}>
                        <i className="fa fa-paper-plane fa-2x"/>
                    </div>
                </div>
            </div>
        )
    }
} 