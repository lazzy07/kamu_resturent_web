import React, {Component} from 'react';
import Switch from 'react-switch'

export class ToggleSwitch extends Component{

    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(checked) {
        this.setState({ checked });
    }

    render(){
        return (
            <div>
                {/* Basic Switch */}
                <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    id="normal-switch"
                    onColor="#e8232d"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={20}
                    width={40}
                />
            </div>
        );
    }
}