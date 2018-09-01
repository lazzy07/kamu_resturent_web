import React, {Component} from 'react';

export class CardEmojiButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            style : '#252525',
        }
    }
    
    render(){
        let style = '#252525'
        if(this.props.isActive){
            style = '#e8232d'
        }
        return(
            <div>
                {/* <a style={style}>{this.props.text}</a> */}
                <a style={{
                    color: style,
                    fontSize: 15, 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <i className={this.props.icon}/>
                        <b style={{marginLeft: 10}}>
                            {this.props.text}
                        </b>
                </a>
            </div>
        )
    }
}