import React from 'react';

class HelloWorld extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            who:'world'
        }
    }

    ChangeToWorld = () => {
        this.setState({
            who : 'World'
        })
    }
    ChangeToFriend = () => {
        this.setState({
            who : 'Friend'
        })
    }
    ChangeToReact = () => {
        this.setState({
            who : 'React'
        })
    }

    render(){
        return(
            <div>
                <p>Hello, {this.state.who}</p>
            <button onClick={this.ChangeToWorld}>World</button>
            <button onClick={this.ChangeToFriend}>Friend</button>
            <button onClick={this.ChangeToReact}>React</button>
            </div>
        );
    }
}

export default HelloWorld;