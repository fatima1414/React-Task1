import CardUi from "../Layout/CardUi"
const About = () =>{

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <CardUi title="wed development" para="lorem"/>
                </div>
                 <div className="col-lg-4">
                    <CardUi title="app-developer" para="lorem"/>
                </div>
                 <div className="col-lg-4">
                    <CardUi title="ui/ux" para="lorem"/>
                </div>
                
            </div>
        </div>


        </>
    )
}
export default About