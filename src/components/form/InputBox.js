import React from 'react';

export const InputBox = (props) => {
    return(
        <div className="form-group">
            <label><span style={{...props.labelStyles}}>{props.label}</span></label>
            <input
                name={props.name}
                type={props.type}
                className="form-control" 
                aria-describedby="emailHelp" 
                placeholder={props.placeHolder}
                value={props.value}
                onChange={e => {props.onChange(e)}}
                style={{...props.inputStyles}}
            />
            <small className="form-text text-muted">{props.description}</small>
        </div>
    )
}