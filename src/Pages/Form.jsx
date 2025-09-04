import { useState } from "react";

const Form = () => {

    const [user, SetUser] = useState({})

    function InputValue(e) {
        //   console.log(' name=${e.traget.name},value=${e.traget.value}');
        // ..........method 1..........//
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     {

    //         const newUser = {
    //             [name]: value
    //         }
    //         SetUser({ ...user, ...newUser })

    //     }
    // }

     // ..........method 2..........//
    const{name,value}=e.target
    SetUser({...user,[name]:value})
    }




    function signup(e) {
        e.preventDefault()
        console.log(user);


    }

    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={signup}>
                    <div className="mt-4">
                        <input type="text" name="username" onChange={(e) => InputValue(e)} className="form-control" placeholder="enter username" />
                    </div>
                    <div className="mt-4">
                        <input type="text" name="useremail" onChange={(e) => InputValue(e)} className="form-control" placeholder="enter email" />
                    </div>
                    <div className="mt-4">
                        <input type="number" name="usernumber" onChange={(e) => InputValue(e)} className="form-control" placeholder="enter number" />
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-success">submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Form