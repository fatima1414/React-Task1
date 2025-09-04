import { Component } from "react";
class Counter extends Component{

    constructor(){
        super()
        this.state ={
        count:0,
        name:"hello"
        }
    }
    plus =()=>{
        this.setState({
            count:this.state.count + 1,
            name:"world"
        })
    }
    minus =()=>{
        this.setState({
            count:this. state.count > 0 ? this.state.count - 1:0
        })
    }
    render(){
        return(
        <>
        <div className="col-6 mx-auto my-5 p-5 shadow text-center">
            <h2>{this.state.count}</h2>
            <h2>{this.state.name}</h2>
            <button onClick={this.plus}className="btn btn-outline-success me-3">+</button>
            <button onClick={this.minus}className="btn btn-outline-danger me-3">-</button>
        </div>
        </>
        ) 
    }
    
}
export default Counter