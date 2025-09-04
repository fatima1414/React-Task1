import { useState } from "react";

const Api = () => {
    const [users,setUser] = useState([])
    async function showApi() {

        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUser(data)
    }
    console.log("data.......");
    console.log(users);
    return (
        <>
            <button onClick={showApi} className="btn btn-info mt-4 d-block mx-auto">ShowApi</button>
            <table className="my-5 container table table-hover table-striped table-success table-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobile</th>
                    </tr>
                 </thead>
                 <tbody>                   {
                        users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
 
               
            </table>
        </>
    )

}
export default Api