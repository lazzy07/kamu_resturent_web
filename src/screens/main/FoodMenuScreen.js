import React, {Component} from 'react';
import Lottie from 'react-lottie';
import {connect} from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import * as animationData from '../../animations/create_food_menu/data.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

class FoodMenuScreen extends Component{
    foodMenu = null;

    render(){
        if(this.foodMenu){
            return(
                <div>
                    <div style={{padding: '100px'}}>
                        FoodMenu Screen
                    </div>

                    

                    <Navbar active={5}/>
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
                                <p>Food Menu not found</p>
                            </div>
                                <Lottie options={defaultOptions}
                                    height={"300px"}
                                    width={"300px"}
                                />
                            <div style={{textAlign: 'center', color: '#7a7a7a', padding: '5px'}}>
                                <p>
                                    <a className='hovarable' style={{color: '#e8232d'}} 
                                        onClick={() => {
                                            
                                        }}>
                                            Click Here
                                        </a><br/>To create a Food Menu</p>
                            </div>
                    </div>
                    <Navbar active={5}/>
                </div>
            )
        }
    }
}

export default connect(null, null)(FoodMenuScreen);