import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';

import {openCreateOfferModal, setTimeOfCreateOffer} from '../../redux/actions/NewOfferActions';

class CreateOfferButton extends Component{
    render(){
        return(
            <div
                onClick={() => {
                    this.props.openCreateOfferModal();
                    this.props.setTimeOfCreateOffer();
                }} 
                style={{
                    marginTop: '70px',
                    marginBottom: '30px',
                    boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                    textAlign: 'center'
                }}
            >
                <h5  className="hovarable hoverRed" style={{color: '#252525', padding: '25px'}}><i className='fa fa-edit'/>&nbsp;<b>Create a new Offer or an Ad</b></h5>
                
            </div>
        )
    }
}

const mapDispatchToProps ={
    openCreateOfferModal,
    setTimeOfCreateOffer
}

export default connect(null, mapDispatchToProps)(CreateOfferButton);