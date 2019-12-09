import React from 'react';

class RouletteGun extends React.Component{


    static defaultProps = {
        bulletInChamber : 8
    }

    constructor(props){
        super(props);
        this.state = {
            chamber : null,
            spinningTheChamber : false,
            text : "you're safe!"
        }
    }

    setText(){
        if(this.state.chamber===this.props.bulletInChamber){
            return 'BOOM!';
        }
        else{
            return "you're safe";
        }
    }

    pullTrigger = () => {
        this.setState({spinningTheChamber:true,text:'spinning the chamber and pulling the trigger! ..'});
        let timeOut =  setTimeout(() =>{
            this.setState({
                chamber : Math.ceil(Math.random()*8),
                spinningTheChamber:false
            });
            this.setState({text:this.setText()});
        },2000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeOut);
    }

    render(){
        return(
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.pullTrigger}>pull the trigger</button>
            </div>
        );
    }
}

export default RouletteGun;