import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WithContext as ReactTags} from 'react-tag-input';

import {setTags} from '../../redux/actions/NewOfferActions';

class TagInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            tags: [],
            suggestions: []
        }
    }

    handleDelete = (i) => {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition = (tag) => {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag = (tag, currPos, newPos) => {
        const tags = [...this.props.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

    componentDidUpdate = () => {
        this.props.setTags(this.state.tags);
    }

    render = () => {
        
        return(
            <div>
                <ReactTags
                    autofocus={false}
                    inline={true}
                    tags={this.state.tags}
                    setTags={this.setTags}
                    suggestions={this.state.suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    //delimiters={}
                    placeholder={this.props.placeHolder}
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    setTags
}

export default connect(null, mapDispatchToProps)(TagInput)