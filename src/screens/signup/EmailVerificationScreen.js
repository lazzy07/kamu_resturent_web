import React, {Component} from 'react';
import Lottie from 'react-lottie';
//import {authUser} from '../../firebase/auth';

import firebase from 'firebase/app';
import 'firebase/auth';

import * as animationData from '../../animations/email_verification/data.json';

import {LoadingScreen} from '../../components/loading/LoadingScreen';
import { RESTURANT_OFFERS } from '../../constants/routes';

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

export default class EmailVerificationScreen extends Component {
    constructor(props){
        super(props);
        this.currentUser = null;
        this.state = {
            loading: true,
        }
    }


    sendEmail  = () => {
        const auth = firebase.auth();
        let authUser = auth.currentUser;
        authUser.sendEmailVerification().then(()=> {
            
        }).catch(error => {
            console.log(error);
            this.setState({
                mainMessage: (<span style={this.descriptionStyles.warning}>{error.message}</span>),
            })
        })
    }

    componentWillMount = () => {
        const auth = firebase.auth()
        const time = setInterval(() => {
            this.currentUser = auth.currentUser;
            if(this.currentUser){
                this.setState({
                    loading: false,
                })
                clearInterval(time);
            }
        }, 100)
    }

    componentDidMount = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    if(user.emailVerified){
                        this.props.history.push(RESTURANT_OFFERS);
                    }
                }
            })
        //if(authUser){
            // let interval = setInterval(() => {
            //     const auth = firebase.auth();
            //     if(auth.currentUser){
            //         if(auth.currentUser.emailVerified){
            //             this.props.history.push('/offers');
            //             clearInterval(interval);
            //         }
            //     }
            // }, 1000);
        //}
    }

    render(){
        if(!this.state.loading){
            if(!this.currentUser.emailVerified){
                return(
                    <div>
                        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center'}}>
                            <div>
                                <div style={{color: '#7a7a7a',paddingBottom: '10px', textAlign: 'center'}}>
                                    <h1>Kamu <span style={{color: '#e8232d'}}>Resturant</span></h1>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <p style={{color: '#7a7a7a'}}>Please follow the link in the email we send you and refresh this website<br/></p>
                                </div>
                                <div style={{}}>
                                    <Lottie options={animationOptions}
                                        height={"300px"}
                                        width={"300px"}
                                    />
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <p style={{color: '#7a7a7a'}}>Please verify your email<br/><b className="hovarable" style={{color: '#e8232d'}} onClick={this.sendEmail}>Re-send the Email</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div>
                        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center'}}>
                            <div style={{textAlign: 'center'}}><h1 style={{color: '#7a7a7a'}}>Access Denied</h1></div>
                        </div>
                    </div>
                )
            }
        }else{
            return(
                <LoadingScreen/>
            )
        }
    }
}