import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [users, setUser] = useState([])
    async function showApi() {

        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUser(data)
    }

    useEffect(() => {
        showApi()
    }, [])
    //[]=>dependency
    console.log("data.......");
    console.log(users);
    const show = () => {
        alert("first")
    }
    const showData = (id) => {
        alert("second")
    }
    const trash = (id) => {
        alert("do you wnat to delete it")
    }
    return (
        <>
            <table className="my-5 container table table-hover table-striped table-success table-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {!users.length > 0 && <h1>loading........</h1>}
                    {
                        users && users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <button onClick={() => trash(user.id)} className="btn btn-outline-danger">-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <button onClick={show} className="btn btn-outline-success me-3">show</button>
                <button onClick={() => showData(1)} className="btn btn-outline-warning me-3">showData</button>
            </div>
        </>
    )

}
export default UseEffectHook