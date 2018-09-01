import React, {Component} from 'react';
import {Modal} from '../modal/Modal';
import {Animated} from 'react-animated-css';
import {connect} from 'react-redux';
import CreateFoodMenuForm from '../food_menu/CreateFoodMenuForm';
import { ToggleSwitch } from '../form/ToggleSwitch';

import {openCreateFoodMenuModal, closeCreateFoodMenuModal} from '../../redux/actions/NewFoodMenuActions'

class CreateFoodMenuModal extends Component{
    openModal = () => {
        var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        document.body.style.marginRight = scrollBarWidth
        document.body.style.overflow = "hidden";
    }

    closeModal = () => {
        document.body.style.overflow = "auto";
        document.body.style.marginRight = 0;
    }

    render() {
        if(this.props.isModalOpen){
            this.openModal();
            return(
                <Modal>
                    <Animated className="fadeIn">
                                <div className="modalBody" style={{overflowX: 'hidden'}}>
                                    <div style={{display: 'flex',color:'#7a7a7a', flexDirection:'row', flexWrap: 'nowrap'}}>
                                        <div style={{flex: 19}}>
                                            <h5 style={{paddingLeft: "10px"}}>Create Food Menu</h5>
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
                                                }} className="hoverRed"><b>X</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{marginTop: '2px'}}/>
                                    <CreateFoodMenuForm/>
                                </div>
                            </Animated>
                </Modal>
            )
        }else{
            this.closeModal();
            return(
                <div/>
            )
        }
    }
}

const mapDispatchToProps = {
    openModal: openCreateFoodMenuModal,
    closeModal: closeCreateFoodMenuModal,
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.newFoodMenu.isCreateNewFoodMenuOpen,
        images: state.newOffer.images
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFoodMenuModal);