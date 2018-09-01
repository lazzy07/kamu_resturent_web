import React, {Component} from 'react';

import Navbar from '../../components/navbar/Navbar';

class PaymentScreen extends Component{
    render(){
        return(
            <div>
                <div style={{padding: '100px'}}>
                    Payment Screen
                </div>
                <Navbar/>    
            </div>
        )
    }
}

export default PaymentScreen;