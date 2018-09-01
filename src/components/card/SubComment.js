import React, {Component} from 'react';
import TimeAgo from 'react-timeago';
import {Animated} from 'react-animated-css';
import {isLiked} from "../../functions";

import {SUBLIKES_LIST_INCREMENT} from '../../constants';

export class SubComment extends Component{

    constructor(props){
        super(props);
        this.state = {
            comment: null,
            openedLikes: [],
            moreLikesButton: null
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

    addReadmoreButton = () => {
        if(this.props.comment){
            let comment;
            if(this.props.comment.length > 50){
                comment = (
                    <span>
                        {this.props.comment.substring(0,50)}
                        <b onClick={() => {
                                comment = (<span>{this.props.comment}</span>)
                                this.setState({comment});
                            }}>...   Read more
                        </b>
                    </span>
                );
            }else{
                comment = (<span>{this.props.comment}</span>)
            }

            this.setState({
                comment,
            })
        }
    }

    componentWillMount = () =>{
        this.addReadmoreButton();
    }

    renderLikesList = (array) => {
        return array.map(like => {
            if(like.userName === this.props.myUserName){
                return (<span key={like.key} style={{color: '#e8232d'}}>You&nbsp;&nbsp;</span>)
            }else{
                return (<span key={like.key} style={{color: '#7a7a7a'}}>{like.firstName + " " + like.lastName}&nbsp;&nbsp;</span>)
            }
        })
    }

    openLikesList = () => {
        this.likesList = null;
        if(this.props.likes){
            if(this.state.openedLikes){
                let openLength = this.state.openedLikes.length;
                let fullLength = this.props.likes.length;
                if(openLength+SUBLIKES_LIST_INCREMENT < fullLength){
                    this.setState({
                        openedLikes: this.renderLikesList(this.props.likes.slice(0, openLength+SUBLIKES_LIST_INCREMENT)),
                        moreLikesButton: <span>&nbsp;&nbsp;<b style={{color: '#7a7a7a'}} onClick={this.openLikesList}>Show More</b></span>,
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

    likesList = (
        <span style={{
            color: '#7a7a7a',
            paddingBottom: '0px',
            //marginBottom: '10px',
        }} onClick={() => {
            this.openLikesList();
        }}>
            {this.getLikesText(this.props.likes)}
        </span>
    )

    render(){
        let likeColor = "#252525";
        let likeText = " Like";

        if(isLiked(this.props.likes, this.props.myUserName)){
            likeColor = "#e8232d";
            likeText = " Liked";
        }

        return(
            <Animated className='fadeInUp'>
                <div style={{marginBottom: '10px', marginTop: '10px'}}>
                    <hr/>
                    <b style={{marginBottom: '0px'}}>{this.props.name}</b>&nbsp;<span style={{color: '#7a7a7a', fontSize: '14px'}}>replied</span>
                    <br/>
                    <span><TimeAgo minPeriod={20} style={{color: '#7a7a7a', fontSize: '12px'}} date={this.props.time}/></span>
                    <br/>
                    {this.state.comment}
                    <br/>
                    <span style={{color: '#7a7a7a', fontSize: '14px'}}>
                        {this.likesList}
                        {this.state.openedLikes}
                        {this.state.moreLikesButton}
                    </span>
                    <br/>
                    <span style={{color: likeColor}}>
                    <i className="fa fa-heart"/> {likeText}
                    </span>
                    {/* <hr/> */}
                </div>
            </Animated>
        )
    }
}