import React from 'react';
import {ChatListElement} from '../components/messaging/ChatListElement';


export const renderChatListData = (array, userName, openChatFunc) => {
    if(array){
        return array.map(elem => {
            return(
                <ChatListElement
                    key={elem.key}
                    id={elem.key}
                    myUserName={userName}
                    name={elem.from.firstName + " " + elem.from.lastName}
                    profileImage={elem.from.profileImage}
                    userName={elem.from.userName}
                    openChatFunc={openChatFunc}
                    lastMessage = {elem.from.lastMessage}
                />
            )
        })
    }else{
        return null;
    }
}