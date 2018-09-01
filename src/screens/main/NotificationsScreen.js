import React, {Component} from 'react';
import Lottie from 'react-lottie';

import Navbar from '../../components/navbar/Navbar';
import * as animationData from '../../animations/notifications/data.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

class NotificationsScreen extends Component{
    render(){
        let notificationData = null;

        if(notificationData){
            return(
                <div>
                    <div style={{padding: '100px'}}>
                        Notifications Screen
                    </div>
                    <Navbar active={4}/>
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
                                <p>No notifications yet !</p>
                            </div>
                                <Lottie options={defaultOptions}
                                    height={"300px"}
                                    width={"300px"}
                                />
                            {/* <div style={{textAlign: 'center', color: '#7a7a7a', padding: '5px'}}>
                                <p><a style={{color: '#e8232d'}}>Click Here</a><br/>To create a Food Menu</p>
                            </div> */}
                    </div>
                    <Navbar active={4}/>
                </div>
            )
        }
    }
}

export default NotificationsScreen;