import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Animated} from 'react-animated-css';
import {withRouter} from 'react-router-dom'
import {openCreateOfferModal, closeCreateOfferModal, setToInitial, setFormData} from '../../redux/actions/NewOfferActions';
import {Modal} from '../modal/Modal';
import { ToggleSwitch } from '../form/ToggleSwitch';
import CreateOfferForm from './CreateOfferForm';

class CreateOfferModal extends Component{
    constructor(props){
        super(props);
        this.state={
            modelOpen: false,
        }
        this.classes = "fadeIn";
    }

    openModal = () => {
        var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        document.body.style.marginRight = scrollBarWidth
        document.body.style.overflow = "hidden";
    }

    closeModal = () => {
        document.body.style.overflow = "auto";
        document.body.style.marginRight = 0;
    }

    //Sending data to the server
    sendOfferDataToServer = () => {
        
    }

    setTags = (tags) => {
        this.setState({
            tags,
        })
    }

    render(){
        if(this.props.isModalOpen){
            this.openModal()
            return(
                <div>
                    <Modal>
                        <Animated className="fadeIn">
                            <div className="modalBody" style={{overflowX: 'hidden'}}>
                                <div style={{display: 'flex',color:'#7a7a7a', flexDirection:'row', flexWrap: 'nowrap'}}>
                                    <div style={{flex: 19}}>
                                        <h5 style={{paddingLeft: "10px"}}>Create Offer</h5>
                                    </div>
                                    <div 
                                        className="hovarable" 
                                        style={{
                                            justifySelf: 'flex-end',
                                            textAlign: 'right',
                                            flex: 1,
                                        }}
                                    >
                                        <div style={{display: 'flex'}}>
                                            <div style={{paddingRight: '20px', display: 'flex'}}>
                                                <span style={{paddingRight: '10px'}}>Preview</span> 
                                                <ToggleSwitch/>
                                            </div>
                                            <h5 onClick={() => {
                                                this.props.closeModal();
                                                this.props.setToInitial();
                                            }} className="hoverRed"><b>X</b></h5>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{marginTop: '2px'}}/>
                                <CreateOfferForm/>
                            </div>
                        </Animated>
                    </Modal>
                </div>
            )
        }else{
            this.closeModal();
            return(
                <div></div>
            )
        }
    }
}

const mapDispatchToProps = {
    openModal: openCreateOfferModal,
    closeModal: closeCreateOfferModal,
    setToInitial,
    setFormData
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.newOffer.createOfferModalOpen,
        images: state.newOffer.images
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateOfferModal));