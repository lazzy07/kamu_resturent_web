import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

import {isLiked} from "../../functions";
import {CardEmojiButton} from './CardEmojiButton';
import {InputBox} from "../form/InputBox";
import Button from '../button/Button';
import {Comment} from './Comment';
import TimeAgo from 'react-timeago';
import {Animated} from 'react-animated-css';

import {renderUserInfo} from '../../data/RenderUserInfo';

import {INCREMENT_COMMENTS} from '../../constants';
import {INCREMENT_LIKES} from '../../constants';

export default class Card extends Component {
    constructor(props){
        super(props);

        this.state = {
            openMenu : null,
            active: [false, false, false],
            commentsLength: 0,
            likesLength: 0,
            sharesLength: 0,
            
            activeComments : 0,
            activeLikes: 0,
            description: null,
        }
    }

    //Message Data rendering
    renderMessageArray(array){
        return array.map((comment) => {
            return(
                <Comment
                    key = {comment.key}
                    profileImage={comment.profileImage}
                    name= {comment.firstName + " " + comment.lastName}
                    userName={comment.userName}
                    comment = {comment.comment}
                    likes = {comment.likes}
                    subComments = {comment.subComments}
                    time = {comment.time}
                    myUserName = {this.props.myUserName}
                />
            )
        })
    }

    openMessages = () => {
        if(this.props.comments){
            const increment = INCREMENT_COMMENTS;

            let comments = [];
            let fullLength = this.props.comments.length;

            let showMoreButton = (
                <div
                    className='col-12' 
                    style={{
                        alignItems: "center",
                        justifyContent: 'center',
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    <hr/>
                    <b onClick={this.openMessages}><i className='fa fa-chevron-down'/> Show More Comments</b>
                </div>
            )

            let showCom = null;
            let button = null;
            if(fullLength > increment){
                let lengthLeft = fullLength - this.state.activeComments;
                if(lengthLeft > 0){
                    if(lengthLeft > increment){
                        comments = this.props.comments.slice(0, this.state.activeComments+increment);
                        button = showMoreButton;
                    }else{
                        comments = this.props.comments.slice(0, fullLength);
                    }
                }else{
                    comments = this.props.comments;
                }
            }else{
                comments = this.props.comments;
            }

            this.setState({
                activeComments: this.state.activeComments+increment
            })

            if(comments){
                if(comments.length > 0){
                    showCom = this.renderMessageArray(comments);
                }
            }

            let menu = (
                <div style={{marginBottom: '15px'}}>
                    {[showCom]}
                    {button}
                    <hr/>
                    <div className="row" style={{
                        alignItems: "center",
                        justifyContent: 'center',
                        paddingBottom: '15px',
                    }}>
                        <div className="col-11 col-md-8" style={{
                            margin: '15px'
                        }}>
                            <InputBox placeHolder="Add comment"/>
                        </div>
                        <div className="col-5 col-md-2">
                            <Button text="Comment"/>
                        </div>
                    </div>
                </div>
            )

            this.setState({
                openMenu: menu,
                active: [false, true, false]
            })
        }else{
            this.setState({
                openMenu: (
                    <div 
                        style={{
                            alignItems: "center",
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '10px'
                        }}
                    >
                        <p>No comments on your offer yet !</p>
                    </div>
                ),
                active: [false, true, false]
            })
        }
    }

    openLikes = () => {
        if(this.props.likes){
            let increment = INCREMENT_LIKES;

            let likes = [];
            let fullLength = this.props.likes.length;

            let showMoreButton = (
                <div
                    className='col-12' 
                    style={{
                        alignItems: "center",
                        justifyContent: 'center',
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    <hr/>
                    <b onClick={this.openLikes}><i className='fa fa-chevron-down'/> Show More Likes</b>
                </div>
            )

            let showLike = null;
            let button = null;
            if(fullLength > increment){
                let lengthLeft = fullLength - this.state.activeLikes;
                if(lengthLeft > 0){
                    if(lengthLeft > increment){
                        likes = this.props.likes.slice(0, this.state.activeLikes+increment);
                        button = showMoreButton;
                    }else{
                        likes = this.props.likes.slice(0, fullLength);
                    }
                }else{
                    likes = this.props.likes;
                }
            }else{
                likes = this.props.likes;
            }

            this.setState({
                activeLikes: this.state.activeLikes+increment
            })

            if(likes){
                if(likes.length > 0){
                    showLike = renderUserInfo(likes, this.props.myUserName);
                }
            }

            let menu = (
                <div className="col-12">
                    {[showLike]}
                    {button}
                </div>
            )

            this.setState({
                openMenu: menu,
                active: [true, false, false]
            })
        }else{
            this.setState({
                openMenu: (
                    <div 
                        style={{
                            alignItems: "center",
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '10px'
                        }}
                    >
                        <p>No likes on your offer yet !</p>
                    </div>
                ),
                active: [true, false, false]
            })
        }
    }

    openShares = () => {
        this.setState({
            active : [false, false, true]
        })
    }

    addReadmoreButton = () => {
        if(this.props.description){
            let description;
            if(this.props.description.length > 300){
                description = (
                    <p style={{
                        padding: '15px'
                    }}>
                        {this.props.description.substring(0,300)}
                        <b onClick={() => {
                                description = (<p style={{padding: '15px'}}>{this.props.description}</p>)
                                this.setState({description});
                            }}>...   Read more
                        </b>
                    </p>
                );
            }else{
                description = (<p style={{padding: '15px'}}>{this.props.description}</p>)
            }

            this.setState({
                description,
            })
        }
    }

    openLastComment(){
        if(this.props.comments){
            const length = this.props.comments.length;
            if(length > 0){
                let showMoreButton = (
                    <div
                        className='col-12' 
                        style={{
                            alignItems: "center",
                            justifyContent: 'center',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        <hr/>
                        <b onClick={this.openMessages}><i className='fa fa-chevron-down'/> Show More Comments</b>
                    </div>
                )

                let button = null;

                if(length>1){
                    button = showMoreButton;
                }

                const comment = this.props.comments[length-1];
                return (
                    <div style={{paddingBottom: '15px'}}>
                        <Comment 
                            profileImage={comment.profileImage}
                            name= {comment.firstName + " " + comment.lastName}
                            userName={comment.userName}
                            comment = {comment.comment}
                            likes = {comment.likes}
                            subComments = {comment.subComments}
                            time={comment.time}
                            myUserName = {this.props.myUserName}
                        />
                        {button}
                    </div>
                )
            }
        }
    }

    countComments = (commentsArray) => {
        let count = 0;
        if(commentsArray){
            count = commentsArray.length;
            let length = commentsArray.length;
            for(let i=0;i<length;i++){
                if(commentsArray[i].subComments){
                    count += commentsArray[i].subComments.length;
                }
            }
            return count;
        }
        return 0;
    }

    getLikesText = (array) => {
        if(array){
            const length = array.length;

            if(length === 0){
                return "";
            }else if(length === 1){
                if(isLiked(this.props.likes, this.props.myUserName)){
                    return "You liked this";
                }
                return array[0].firstName + " liked this";
            }else{
                if(isLiked(this.props.likes, this.props.myUserName)){
                    return "You and "+ (length-1) +" others liked this";
                }
                return array[length-1].firstName + " and "+ (length-1) +" others liked this";
            }
        }
    }

    componentWillMount = () => {
        this.addReadmoreButton();
    }

    render(){
        let menu = null;
        if(this.state.openMenu === null){
            menu = this.openLastComment();
        }else{
            menu = this.state.openMenu;
        }

        let likesLength = this.props.likes.length;
        let sharesLength = this.props.shares.length;
        let commentsLength = this.countComments(this.props.comments);

        return (
            <Animated className="fadeIn">
                <div 
                    style={{
                        boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                        marginBottom: "60px",
                        paddingTop: "10px",
                        paddingBottom: '10px',
                        width: "100%",
                    }}
                >

                    {/* Main Stuff */}
                    <div className="row" style={{
                        width: "100%",
                        marginLeft: "15px",
                        paddingTop: '10px'
                    }}>
                            <img 
                                style={{
                                    marginRight: "15px",
                                    boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                                }} 
                                src={this.props.profileImage} 
                                width="40px" 
                                height="40px"  
                                alt=""
                            />
                        <div>
                            <p style={{
                                marginBottom: "0px",
                                color: '#252525'
                            }}><b>{this.props.name}</b></p>
                            <p style={{
                                color: '#7a7a7a',
                                fontSize: 12
                            }}>{this.props.userName}</p>
                        </div>
                    </div>
                    <div style={{marginLeft: '15px'}}>
                        <TimeAgo minPeriod={10} style={{margin: '0px', color:'#7a7a7a', fontSize: '14px'}} date={this.props.time}/>
                    </div>
                    {this.state.description}
                    <img 
                        style={{
                            marginBottom: '15px',
                            boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                        }}
                        src={this.props.profileImage} 
                        width="100%"  
                        alt=""
                    />

                    {/* Button Stuff */}
                    <div className="row" style={{
                        padding: "5px",
                        paddingBottom: '5px'
                    }}>
                        <div className="col-4" 
                            onClick={() =>{
                                this.openLikes();
                            }}
                        >
                            <CardEmojiButton 
                                icon="fa fa-heart fa-2x"
                                isActive={this.state.active[0]} 
                                text={likesLength}
                            />
                        </div>
                        <div 
                            onClick={() => {
                                this.openMessages();
                            }} 
                            className="col-4"
                        >
                            <CardEmojiButton 
                                icon="fa fa-comments fa-2x" 
                                isActive={this.state.active[1]} 
                                text={commentsLength}
                            />
                        </div>
                        <div className="col-4"
                            onClick={()=>{
                                this.openShares();
                            }}
                        >
                            <CardEmojiButton 
                                icon="fa fa-retweet fa-2x" 
                                text={sharesLength}
                                isActive={this.state.active[2]}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <p style={{
                            paddingTop: '5px',
                            paddingLeft: '15px',
                            paddingBottom: '5px',
                            color: '#7a7a7a'
                        }}>
                            {this.getLikesText(this.props.likes)}
                        </p>
                    </div>
                    {/* Hidden Menu Stuff */}
                    {menu}
                </div>
            </Animated>
        )
    }
}