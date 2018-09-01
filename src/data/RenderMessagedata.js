import React from 'react';
import {MessageElement} from '../components/messaging/MessageElement';

export const renderMessagedata = (array ,myUserName, profileImage) => {
    if(array){
        return array.map(elem => {
            return (
                <MessageElement
                    key={elem.key}
                    message = {elem.message}
                    sender = {elem.sender}
                    reciver = {elem.reciver}
                    tag = {elem.tag}
                    time = {elem.time}
                    profileImage={profileImage}
                    status={elem.status}
                    myUserName={myUserName}
                />
            )
        })
    }else{
        return null;
    }
}