import React from 'react';
import './Tooltip.css';

function Tooltip(props){
    return(
        <span className='Tooltip'>
        <span 
        style={{color: props.color}}
        className='Tooltip-content'
        >
            {props.children}
        </span>
        <div className='Tooltip-message'>
            {props.message}
        </div>
        </span>
    )
}

class TooltipClass extends React.Component {
    static defaultProps = {
        color: '#01A800',
    }
    render(){
        console.log(this.props)
        return (
        <span className='Tooltip'>
        <span 
            style={{color: this.props.color}}
            className='Tooltip-content'
        >
            {this.props.children}
        </span>
        <div className='Tooltip-message'>
            {this.props.message}
        </div>
        </span>)
    }
}

export default TooltipClass;