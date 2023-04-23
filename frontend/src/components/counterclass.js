import React from "react"; 

class Counterclass extends React.Component{
    constructor(){
        super();
        this.increment=this.increment.bind(this)
        this.state = {
            number: 0
        };
    }
increment(){
    this.setState({
        number:this.state.number+1
    })
}
    render(){
        return(
            <div>
                <h3>class component</h3>
                <h1>counter={this.state.number}</h1>
                <button onClick={this.increment}>increment</button>
                <hr/>
            </div>
        )
    }
}

export default Counterclass;