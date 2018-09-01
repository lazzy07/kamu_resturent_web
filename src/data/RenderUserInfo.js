import React from 'react';
import {LikeDiv} from '../components/card/LikeDiv';

export const renderUserInfo = (array, myUserName) => {
    return array.map(like => {
        let col = "#7a7a7a";
        if(like.userName === myUserName){
            col = '#e8232d';
        }

        return (
            <LikeDiv 
                color={col}
                name={like.firstName + " " + like.lastName}
                profileImage={like.profileImage}
                userName={like.userName}
                time={like.time}
            />
        )
    })
}