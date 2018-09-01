import React, {Component} from 'react';
import Lottie from 'react-lottie';

import Navbar from '../../components/navbar/Navbar';
import { offersData } from '../../data/OffersData';
import {renderOfferData} from '../../data/RenderCardData';
import {connect} from 'react-redux';

import {openCreateOfferModal, setTimeOfCreateOffer} from '../../redux/actions/NewOfferActions';

import {withRouter} from 'react-router-dom'

import * as animationData from '../../animations/create_offer/data.json';
import CreateOfferButton from '../../components/card/CreateOfferButton';

import CreateOfferModal from '../../components/create_offer/CreateOfferModal';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

class OffersScreen extends Component{
    render(){
        let cardData = null//renderOfferData(offersData);
        if(cardData){
            return(
                <div>
                    <div
                        className="col-12 col-md-10 col-lg-8 offset-lg-2 offset-md-1"
                        style={{marginTop : "80px"}}
                    >
                        <CreateOfferButton/>
                    </div>
                    <div 
                        className="col-12 col-md-10 col-lg-8 offset-lg-2 offset-md-1"
                        style={{marginTop : "20px"}}
                    >
                        {cardData}
                    </div>
                    <CreateOfferModal/>
                    <Navbar active={0}/>
                </div>
            )
        }else{
            return(
                <div>
                    <div style={{
                        position: 'absolute',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%'
                    }}>
                            <div style={{textAlign: 'center', color: '#7a7a7a', paddingTop: '70px'}}>
                                <p>No offers found</p>
                            </div>
                            <Lottie options={defaultOptions}
                                height={"300px"}
                                width={"300px"}
                            />
                            <div style={{textAlign: 'center', color: '#7a7a7a', padding: '5px'}}>
                                <p>To Create a New Offer<br/>
                                    <a 
                                        style={{color: '#e8232d'}}
                                        onClick={() => {
                                            this.props.openCreateOfferModal();
                                            this.props.setTimeOfCreateOffer();
                                        }}
                                        className="hovarable"
                                    >
                                        Click Here
                                    </a>
                                </p>
                            </div>
                    </div>
                    <CreateOfferModal/>
                    <Navbar active={0}/>
                </div>
            )
        }
    }
}

const mapDispatchToProps ={
    openCreateOfferModal,
    setTimeOfCreateOffer
}

export default withRouter(connect(null, mapDispatchToProps)(OffersScreen));