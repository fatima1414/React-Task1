import { useState } from "react"

const ConterFn =()=>{
 const [count,setCount]= useState(0)
 const [name,setName] = useState("hello")
 function plus(){
    setCount(count + 1)
 }
  function minus(){
    count>0?setCount(count-1):count
 }
 return(
    <>
    <div className="col-6 mx-auto my-5 p-5 shadow text-center">
        <h2>{count}</h2>
        <h2>Name:{name}</h2>
        <button onClick={plus} className="btn btn-outline-success me-3">+</button>
        <button onClick={()=>setCount(count + 1)} className="btn btn-outline-info me-3">+</button>
        <button onClick={minus} className="btn btn-outline-danger me-3">-</button>
        <button onClick={()=>setName("world")} className="btn btn-outline-warning me-3">update world</button>

    </div>
    </>
 )
}
export default ConterFn