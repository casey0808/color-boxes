import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        num: 16,
        colors: [
            'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'black',
            'pink', 'lightblue', 'brown', 'grey', 'whitesmoke', 'teal', 'navy', 'silver', 'olive',
            'maroon'
        ]
    }
    render(){
        return(
            <div className='boxes'>
                {Array(this.props.num).fill(<Box colors={this.props.colors} />)}
            </div>
        )
    }
}

export default BoxContainer;