// import React from "react";
// class servicesClass extends React.Component{}

import { Component } from "react";
import data from "../Layout/Data";
import CardClass from "./CardClass";


class servicesClass extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {
                            data.map((ele) => {
                                return (
                                    <div className="col-lg-4">
                                        <CardClass title={ele.title} para={ele.para} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </>
        )
    }
}
export default servicesClass