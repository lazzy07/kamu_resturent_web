import React, {Component} from 'react';

import {renderChatListData} from '../../data/RenderChatListData';


export class ChatList extends Component{
    render = () => {
        let messages = renderChatListData(this.props.messageData, this.props.myUserName, this.props.openChatFunc);
        return(
            <div style={{paddingLeft: '0px', marginLeft: '0px'}}>
                {[messages]}
            </div>
        )
    }
}