import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            text:'tick'
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({count:this.state.count+1});
            if(this.state.count>=8){
                this.setState({text:'BOOM!'});
                clearInterval(this.interval);
            }
            else if(this.state.count%2===0){
                this.setState({text:'tick'});
            }
            else{
                this.setState({text:'tock'});
            }
        },1000);
    }

    render(){
        return(
            <div><p>{this.state.text}</p></div>
        );
    }
}

export default Bomb;