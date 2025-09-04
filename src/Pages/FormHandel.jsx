import { useState } from "react";

const FormHandel = () => {

    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")

    function signup(e) {
        e.preventDefault()
        alert("hello")
        const user = {
            name:name.target.value,email

        }
        console.log(user);
        // SetName(null)
        // SetEmail(null)
    }
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={signup}>
                    <div className="mt-4">
                        <input type="text" onChange={(e) => SetName(e)} className="form-control" placeholder="enter username" />
                    </div>
                    <div className="mt-4">
                        <input type="text" onChange={(e) => SetEmail(e.target.value)} className="form-control" placeholder="enter email" />
                        <p>{email}</p>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-success">submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default FormHandel