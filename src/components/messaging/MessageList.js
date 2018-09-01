import React, {Component} from 'react';
import {renderMessagedata} from '../../data/RenderMessagedata';

export class MessageList extends Component{
    render(){
        let messageList = renderMessagedata(this.props.messageList, this.props.myUserName, this.props.otherProfileImage);

        return(
            <div>
                {[messageList]}
            </div>
        )
    }
}