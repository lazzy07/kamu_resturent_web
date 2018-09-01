import React from 'react';
import Card from '../components/card/Card';

export const renderOfferData = (offersData) => {
    let data =  offersData.map(offer => {
        return (<Card
            key = {offer.key}
            name= {offer.firstName + " " + offer.lastName}
            userName = {offer.userName}
            profileImage = {offer.profileImage}
            description = {offer.description}
            likes = {offer.likes}
            comments = {offer.comments}
            shares = {offer.shares}
            time={offer.time}
            myUserName="@lazzy07"
        />)
    })
    return data;
}