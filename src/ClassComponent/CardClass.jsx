import { Component } from "react";
class CardClass extends Component{
    render(){
        return(
            <>
               <div className="card shadow border-0 mt-5 col-4 text-center mx-auto ">
                    <img src="" alt="" />
                    <div className="card-body">
                        <h3>{this.props.title||"dummy title"}</h3>
                        <p>{this.props.para||"dummy para"}</p>
                        
                    </div>
                </div>

              </>  
        )
    }
}

export default CardClass