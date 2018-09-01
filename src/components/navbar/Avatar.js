import React, {Component} from 'react';
import NavButton from './NavButton';

export default class Avatar extends Component{
    render(){
        let avatar = this.props.image;
        if(!avatar){
            return (<div className="icon"><NavButton icon="fa fa-user-circle fa-2x" text=""/></div>)
        }else{
            return (
                <div className="icon">
                    <img style={{borderRadius: "50px", width: "30px", height: "30px"}} src={avatar} alt=""/>
                </div>
            )
        }
    }
}