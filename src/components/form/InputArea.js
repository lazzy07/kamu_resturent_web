import React, {Component} from 'react';

class InputArea extends Component{
    render(){
        return(
            <textarea 
                style={{
                    width: "82%", 
                    fontSize: '14px', 
                    marginTop: '5px', 
                    marginLeft: '5px',
                    padding: '7px',
                    borderRadius: '5px',
                    ...this.props.styles
                }}
                name={this.props.name}
                rows={this.props.rows} 
                placeholder={this.props.placeHolder}
                onChange={e => {this.props.onChange(e)}}
                value={this.props.value}
            />
        )
    }
}

export {InputArea}