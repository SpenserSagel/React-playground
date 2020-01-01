import React from 'react';

class Accordian extends React.Component{

    static defaultProps = {
        sections : []
    };
    state = {
        currentIndex : -1
    };

    handleClick(index){
        if(this.state.currentIndex===index){
            this.setState({currentIndex:-1});
        }
        else this.setState({currentIndex:index});
    }

    renderButtons(){
        let buttons = [];
        if(!!this.props.sections.length){
            buttons = this.props.sections.map((section,index) =>{
                if(this.state.currentIndex===index){return(
                    <li key={index}>
                        <button key={index} onClick={()=>this.handleClick(index)}>{section.title}</button>
                        <p>{section.content}</p>
                    </li>
                )}
                return(
                    <li key={index}>
                        <button key={index} onClick={()=>this.handleClick(index)}>{section.title}</button>
                    </li>
                )
            });
        }
        else buttons = <li></li>;
        return buttons;
    }

    render(){
        return(
            <ul>
                {this.renderButtons()}
            </ul>
        );
    }
}

export default Accordian;