import CardUi from "../Layout/CardUi";
import data from "../Layout/Data"
const Service = ()=>{
    return(
        <>
        <div className="container">
            <div className="row mx-auto">
                {
                    data.map((ele)=>{
                        return(
                            <div className="col-lg-4">
                                <CardUi title={ele.title} para={ele.para} img={ele.img}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Service