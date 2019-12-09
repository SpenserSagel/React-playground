import React from 'react';

class Counter extends React.Component {
    
    static defaultStates = {
        step:1
    }

    constructor(props){
        super(props);
        this.state = {count:0}
    }

    handleClick = () =>{
        this.setState({
            count : this.state.count+this.props.step
        })
    }

    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button
                    onClick ={this.handleClick}
                >
                    Add 1
                </button>
            </div>
        )
    }
  }

  export default Counter;