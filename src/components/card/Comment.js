import React, {Component} from 'react';
import {SubComment} from './SubComment';
import {InputBox} from "../form/InputBox";
import Button from '../button/Button';
import TimeAgo from 'react-timeago';
import {Animated} from 'react-animated-css';
import {isLiked} from "../../functions";

import {INCREMENT_SUBCOMMENTS} from '../../constants';
import {LIKES_LIST_INCREMENT} from '../../constants';

export class Comment extends Component{
    constructor(props){
        super(props);

        this.state = {
            subCommentsCount: 0,
            comment: null,
            activeComments: 0,
            openMenu: null,
            replyButton: null,
            openedLikes: [],
            moreLikesButton: null
        }
    }

    addReadmoreButton = () => {
        if(this.props.comment){
            let comment;
            if(this.props.comment.length > 150){
                comment = (
                    <span style={{
                        padding: '0px'
                    }}>
                        {this.props.comment.substring(0,150)}
                        <b onClick={() => {
                                comment = (<span style={{padding: '0px'}}>{this.props.comment}<br/></span>)
                                this.setState({comment});
                            }}>...   Read more
                        </b>
                        <br/>
                    </span>
                );
            }else{
                comment = (<span style={{padding: '0px'}}>{this.props.comment}<br/></span>)
            }

            this.setState({
                comment,
            })
        }
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

    openLikesList = () => {
        this.likesList = null;
        if(this.props.likes){
            if(this.state.openedLikes){
                let openLength = this.state.openedLikes.length;
                let fullLength = this.props.likes.length;
                if(openLength+LIKES_LIST_INCREMENT < fullLength){
                    this.setState({
                        openedLikes: this.renderLikesList(this.props.likes.slice(0, openLength+LIKES_LIST_INCREMENT)),
                        moreLikesButton: <span>&nbsp;&nbsp;<b style={{fontSize: '14px', color: '#7a7a7a'}} onClick={this.openLikesList}>Show More</b></span>,
                    })
                }else{
                    this.setState({
                        openedLikes: this.renderLikesList(this.props.likes),
                        moreLikesButton: null
                    })
                }
            }
        }
    }

    renderLikesList = (array) => {
        return array.map(like => {
            if(like.userName === this.props.myUserName){
                return (<span key={like.key} style={{fontSize: '14px',color: '#e8232d'}}>You&nbsp;&nbsp;</span>)
            }else{
                return (<span key={like.key} style={{fontSize: '14px',color: '#7a7a7a'}}>{like.firstName + " " + like.lastName}&nbsp;&nbsp;</span>)
            }
        })
    }

    //Render sub subComments
    createSubCommentArray = (dataArray) => {
        if(dataArray){
            return dataArray.map(comment=>{
                return(
                    <div key = {comment.key} style={{paddingLeft: '10px', paddingRight: '5px'}}>
                        <SubComment
                            profileImage={comment.profileImage}
                            name= {comment.firstName + " " + comment.lastName}
                            userName={comment.userName}
                            comment = {comment.comment}
                            likes = {comment.likes}
                            time={comment.time}
                            myUserName = {this.props.myUserName}
                        />
                    </div>
                )
            })
        }
    }

    openMessages = () => {
        if(this.props.subComments){
            const increment = INCREMENT_SUBCOMMENTS;

            let comments = [];
            let fullLength = this.props.subComments.length;

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
                    <b onClick={this.openMessages}><i className='fa fa-chevron-down'/> Show More Replies</b>
                </div>
            )

            let showCom = null;
            let button = null;
            if(fullLength > increment){
                let lengthLeft = fullLength - this.state.activeComments;
                if(lengthLeft > 0){
                    if(lengthLeft > increment){
                        comments = this.props.subComments.slice(0, this.state.activeComments+increment);
                        button = showMoreButton;
                    }else{
                        comments = this.props.subComments.slice(0, fullLength);
                    }
                }else{
                    comments = this.props.subComments;
                }
            }else{
                comments = this.props.subComments;
            }

            this.setState({
                activeComments: this.state.activeComments+increment
            })

            if(comments){
                if(comments.length > 0){
                    showCom = this.createSubCommentArray(comments);
                }
            }

            let menu = (
                <div>
                    {[showCom]}
                    {button}
                    {/* <div className="row" style={{
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>
                        <div className="col-7 col-md-8" style={{
                            margin: '15px'
                        }}>
                            <InputBox placeHolder="Reply"/>
                        </div>
                        <div className="col-5 col-md-2">
                            <Button text="Reply"/>
                        </div>
                    </div> */}
                </div>
            )

            this.setState({
                openMenu: menu,
            })
        }
    }

    openLastComment(){
        if(this.props.subComments){
            const length = this.props.subComments.length;
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
                        <b onClick={this.openMessages}><i className='fa fa-chevron-down'/> Show More Replies</b>
                    </div>
                )

                let button = null;

                if(length>1){
                    button = showMoreButton;
                }

                const comment = this.props.subComments[length-1];
                return (
                    <div style={{paddingBottom: '15px'}}>
                        <SubComment
                            profileImage={comment.profileImage}
                            name= {comment.firstName + " " + comment.lastName}
                            userName={comment.userName}
                            comment = {comment.comment}
                            likes = {comment.likes}
                            time={comment.time}
                            myUserName={this.props.myUserName}
                        />
                        {button}
                    </div>
                )
            }
        }
    }

    openReply = () =>{
        const button = (
            <div className="row" style={{
                alignItems: "center",
                justifyContent: 'center',
                margin: '0px',
                padding:'0px'
            }}>
                <div className="offset-1 col-11 offset-md-0 col-md-8" style={{
                    marginLeft: '0px'
                }}>
                    <InputBox placeHolder="Reply"/>
                </div>
                <div className="col-5 col-md-2">
                    <Button text="Reply"/>
                </div>
            </div>
        )

        this.setState({
            replyButton: button,
        })
    }

    componentWillMount = () =>{
        this.addReadmoreButton();
    }

    
    likesList = (
        <div style={{
            color: '#7a7a7a',
            paddingBottom: '0px',
            fontSize: '14px'
            //marginBottom: '10px',
        }} onClick={() => {
            this.openLikesList();
        }}>
            {this.getLikesText(this.props.likes)}
        </div>
    )


    render(){
        let menu = null;
        let likeColor = '#252525';
        let likeText = ' Like'


        if(this.state.openMenu === null){
            menu = this.openLastComment();
        }else{
            menu = this.state.openMenu;
        }

        if(isLiked(this.props.likes, this.props.myUserName)){
            likeColor = '#e8232d';
            likeText = ' Liked';
        }

        return(
            <Animated className="fadeInUp">
                <div className="col-12">
                    <hr/>
                    <div className="row" style={{
                        width: "100%",
                        marginLeft: "15px",
                        paddingTop: '5px'
                    }}>
                        <img 
                            style={{
                                marginRight: "15px",
                                marginBottom: '0px',
                                paddingBottom: '0px',
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
                                paddingBottom: '0px',
                                color: '#252525'
                            }}><b>{this.props.name}</b> <span style={{fontSize: '12px', color:'#7a7a7a'}}>&nbsp;commented</span></p>
                            <p style={{
                                color: '#7a7a7a',
                                fontSize: 12
                            }}>{this.props.userName}</p>
                        </div>
                        <div style={{margin: '0px', padding: '0px'}} className="col-12">
                            <TimeAgo minPeriod={10} style={{color: '#7a7a7a', fontSize: '12px'}} date={this.props.time}/>
                        </div>
                        <span className="col-12" style={{
                            padding: '0px',
                            paddingRight: '10px'
                        }}>
                            {this.state.comment}
                            {this.likesList}
                            {this.state.openedLikes}
                            {this.state.moreLikesButton}
                        </span>
                        <div className="col-12" style={{
                            width: "100%",
                            marginLeft: "0px",
                            paddingTop: '0px',
                            margin: '0px'
                        }}>
                            <div className='row'>
                                <div style={{
                                    paddingRight: '15px',
                                    color: likeColor
                                }}>
                                    <i className="fa fa-heart"></i> {likeText}
                                </div>
                                <div onClick={this.openReply} style={{
                                    paddingRight: '15px'
                                }}>
                                    <i className="fa fa-reply"></i> Reply
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-1 col-11">
                        {menu}
                    </div>
                    <div>
                        {this.state.replyButton}
                    </div>
                </div>
            </Animated>
        )
    }
}