import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import Lottie from 'react-lottie';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {FIREBASE_FUNCTION_URL} from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import {doSignInWithEmailAndPassword} from '../../firebase/auth';

import {InputBox} from '../../components/form/InputBox';
import Button from '../../components/button/Button';

import * as routes from '../../constants/routes';

import * as computerData from '../../animations/computer/data.json';
import * as stoveData from '../../animations/stove/data.json';
import * as ovenData from '../../animations/microwave/data.json';
import * as panData from '../../animations/pan_and_knife/data.json';
import { LoadingScreen } from '../../components/loading/LoadingScreen';

const computerOptions = {
    loop: true,
    autoplay: true,
    animationData: computerData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const stoveOptions = {
    loop: true,
    autoplay: true,
    animationData: stoveData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const ovenOptions = {
    loop: true,
    autoplay: true,
    animationData: ovenData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const panOptions = {
    loop: true,
    autoplay: true,
    animationData: panData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

class LoginScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: "",
            password: "",
            loading: false,
            mainMessage: (<span style={this.descriptionStyles.normal}></span>),
            loadingScreen: false,
        }
    }

    descriptionStyles = {
        warning: {
            color: '#e8232d'
        },
        normal: {
            color: '#7a7a7a',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.loginHandler(this.state.user, this.state.password);
        this.setState({
            loading: true,
        })
    }

    loginHandler(user, password){
        if(user && password){
            this.setState({
                loading: false,
                mainMessage: (<span style={this.descriptionStyles.normal}></span>),
            })
            if(password.length > 7){
                if(user.charAt(0) === '@'){
                    //Login with username
                    const data = {
                        userName: user,
                    }
                    axios.post(FIREBASE_FUNCTION_URL+'loginResturent', data, {headers:{'Content-Type': 'application/json;charset=UTF-8',"Access-Control-Allow-Origin": "*"}}).then(res => {
                        if(res.status === 202){
                            doSignInWithEmailAndPassword(res.data, password).then(() => {
                                this.props.history.push(routes.RESTURANT_OFFERS);
                            }).catch(error => {
                                console.log(error);

                                if(error.code === "auth/user-not-found"){
                                    this.setState({
                                        loading: false,
                                        mainMessage: (<span style={this.descriptionStyles.warning}>User not found, Try again</span>),
                                    })
                                }else{
                                    this.setState({
                                        loading: false,
                                        mainMessage: (<span style={this.descriptionStyles.warning}>{error.message}</span>),
                                    })
                                }
                            })
                        }
                        if(res.status === 203){
                            this.props.history.push(routes.RESTURANT_EMAIL_VERIFICATION);
                        }

                        if(res.status === 204){
                            this.setState({
                                loading: false,
                                mainMessage: (<span style={this.descriptionStyles.warning}>Wrong Username Password combination</span>),
                            })
                        }
                    }).catch(err=> {
                        console.log(err);
                        this.setState({
                            loading: false,
                            mainMessage: (<span style={this.descriptionStyles.warning}>{err.message}</span>),
                        })
                    })
                }else if(user.indexOf("@") !== -1){
                    //login with email
                    doSignInWithEmailAndPassword(this.state.user, this.state.password).then(() => {
                        if(firebase.auth().currentUser.emailVerified){
                            this.props.history.push(routes.RESTURANT_OFFERS);
                        }else{
                            this.props.history.push(routes.RESTURANT_EMAIL_VERIFICATION);
                        }
                        
                    }).catch(error => {
                        console.log(error);

                        if(error.code === "auth/user-not-found"){
                            this.setState({
                                loading: false,
                                mainMessage: (<span style={this.descriptionStyles.warning}>User not found, Try again</span>),
                            })
                        }else{
                            this.setState({
                                loading: false,
                                mainMessage: (<span style={this.descriptionStyles.warning}>{error.message}</span>),
                            })
                        }
                    })
                }else{
                    this.setState({
                        loading: false,
                        mainMessage: (<span style={this.descriptionStyles.warning}>Wrong Username or Email format</span>),
                    })
                }
            }else{
                this.setState({
                    loading: false,
                    mainMessage: (<span style={this.descriptionStyles.warning}>Password must be atleast 8 characters long</span>),
                })
            }
        }
    }

    componentWillMount = () => {
        // const auth = firebase.auth();
        // console.log(auth);
        // if(auth.currentUser){
        //     if(auth.currentUser.emailVerified){
        //         console.log("Redirecting");
        //         this.props.history.push('/offers');
        //     }
        // }

        let interval = setInterval(() => {
            const auth = firebase.auth();
            if(auth.currentUser){
                if(auth.currentUser.emailVerified){
                    this.props.history.push(routes.RESTURANT_OFFERS);
                    clearInterval(interval);
                    this.setState({
                        loading: false
                    })
                }else if(auth.currentUser.emailVerified === null){
                    clearInterval(interval);
                    this.setState({
                        loading: false
                    })
                }
            }
        }, 100);

        // if(this.props.user){
        //     this.props.history.push(RESTURANT_OFFERS);
        // }
    }

    componentDidMount = () => {
        document.title = "Kamu - Login"
    }

    render = () => {

        let loading = (<span>&nbsp;&nbsp;</span>);

        if(this.state.loading){
            loading = (
                <span>
                    <i className="fa fa-spinner fa-spin"/>
                    &nbsp;
                </span>
            )
        }

        if(!this.state.loadingScreen){
            return(
                <Animated animationIn='fadeIn' isVisible={true}>
                    <div>
                        <div style={{position: 'fixed',bottom: 100, left: 0, opacity: '0.8'}}>
                            <Lottie options={computerOptions}
                                height={"200px"}
                                width={"200px"}
                            />
                        </div>
                        <div style={{position: 'fixed',bottom: 0, left: 130, opacity: '0.8'}}>
                            <Lottie options={stoveOptions}
                                height={"300px"}
                                width={"300px"}
                            />
                        </div>
                        <div style={{position: 'fixed',bottom: "250px", left: 0, opacity: '0.8'}}>
                            <Lottie options={panOptions}
                                height={"100px"}
                                width={"100px"}
                            />
                        </div>
                        <div style={{position: 'fixed',bottom: 265, left: 150, opacity: '0.8'}}>
                            <Lottie options={ovenOptions}
                                height={"120px"}
                                width={"120px"}
                            />
                        </div>
                        <div>
                            <div
                                className="offset-sm-2 offset-md-2 offset-lg-4 col-12 col-sm-8 col-md-8 col-lg-4"
                                style={{
                                    boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                                    marginTop: '20px',
                                    padding: '20px',    
                                    paddingBottom: '30px',
                                    overflow: 'hidden',
                                    marginBottom: '20px',
                                    backgroundColor: 'rgba(255,255,255,0.9)'
                                }}
                            >
                                <Animated animationIn='fadeIn' isVisible={true}>
                                <div style={{color: '#252525', paddingTop: '20px',paddingBottom: '30px', textAlign: 'center'}}>
                                    <h1>Kamu <span style={{color: '#e8232d'}}>Login</span></h1>
                                    <h5 style={{color:'#7a7a7a'}}>Resturant</h5>
                                </div>
                                </Animated>
                                <div 
                                    className="" 
                                >
                                    <form>
                                        <Animated animationIn='fadeInRight' animationInDelay={200} isVisible={true}>
                                            <InputBox
                                                name="user"
                                                label="Enter Email/Username"
                                                type="email"
                                                placeHolder="Enter Email or Username" 
                                                description="Eg: cyborgstudios@cyborg.com or @cyborgstudios"
                                                onChange={e=> this.onChange(e)}
                                                value={this.state.user}
                                            />
                                        </Animated>
                                        <Animated animationIn='fadeInDown' animationInDelay={250} isVisible={true}>
                                            <InputBox 
                                                name="password"
                                                label="Enter Password" 
                                                type="password" 
                                                placeHolder="Enter password" 
                                                description="Spaces are not allowed"
                                                onChange={e=> this.onChange(e)}
                                                value={this.state.userName}
                                            />
                                        </Animated>
                                        {/* <Animated animationIn='fadeIn' animationInDelay={300} isVisible={true}>
                                            <div className="form-check" style={{
                                                paddingBottom: "10px",
                                                paddingLeft: 20
                                            }}>
                                                <input type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
                                            </div>
                                        </Animated> */}
                                        <div>
                                            <Animated animationIn='fadeInRight' animationInDelay={350} isVisible={true}>
                                                <div style={{margin: '10px', textAlign: 'center'}}>
                                                    {this.state.mainMessage}
                                                </div>
                                            </Animated>
                                        </div>
                                        <Animated animationIn='fadeInUp' animationInDelay={350} isVisible={true}>
                                            <div className="row col-12 justify-content-center fadeIn">
                                            <Button onClick={(e) => this.onSubmit(e)} text={(
                                                <span>
                                                    {loading}
                                                    <b>Signup</b>
                                                </span>
                                            )} type="submit"/>
                                            </div>
                                        </Animated>
                                    </form>
                                    {/* <div style={{marginTop:'10px',display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <Animated animationIn='fadeInUp' animationInDelay={400} isVisible={true}>
                                        <div>
                                            <button className="loginBtn loginBtn--facebook">
                                                Login with Facebook
                                            </button>
                                        </div>
                                        </Animated>
                                        <Animated animationIn='fadeInUp' animationInDelay={450} isVisible={true}>
                                        <div>
                                            <button className="loginBtn loginBtn--google">
                                                Login with Google
                                            </button>
                                        </div>
                                        </Animated>
                                    </div> */}

                                    
                                    <div>
                                        <Animated animationIn='fadeIn' animationInDelay={500} isVisible={true}>
                                            <div style={{paddingTop: '15px'}}>
                                                <b>Don't have an account?&nbsp;
                                                    <Link to={routes.RESTURANT_SIGNUP} style={{color: '#e8232d'}}>
                                                        <b className="icon">Sign up</b>
                                                    </Link>
                                                </b>
                                            </div>
                                        </Animated>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            )
        }else{
            return(
                <LoadingScreen />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {user : state.user}
}

export default withRouter(connect(mapStateToProps)(LoginScreen));