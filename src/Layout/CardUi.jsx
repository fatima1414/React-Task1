//  first way for to many card

// const CardUi = (props) => {
//     console.log(props);
//     return (
//         <>

//         <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
//                 <div className="col-4">
//                     <div className="card">
//                         <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" className="card-img-top w-100 h-60" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.title}</h5>
//                             <p className="card-text">{props.para}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-4">
//                     <div className="card ">
//                         <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg" className="card-img-top w-100 h-60" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.title}</h5>
//                             <p className="card-text">{props.para}</p>
//                         </div> 
//                     </div>
//                 </div>
//                 <div className="col-4">
//                     <div className="card ">
//                         <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" className="card-img-top w-100 h-60" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.title}</h5>
//                             <p className="card-text">{props.para}</p>
//                         </div>
//                     </div>
//                 </div>

//                    <div className="col-4">
//                     <div className="card ">
//                         <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" className="card-img-top w-100 h-60" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.title}</h5>
//                             <p className="card-text">{props.para}</p>
//                         </div>
//                     </div>
//                 </div>

//                    <div className="col-4">
//                     <div className="card ">
//                         <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" className="card-img-top w-100 h-60" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.title}</h5>
//                             <p className="card-text">{props.para}</p>
//                         </div>
//                     </div>
//                 </div>

//                    <div className="col-4">
//                     <div className="card ">
//                         <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" className="card-img-top w-100 h-60" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.title}</h5>
//                             <p className="card-text">{props.para}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )


// }
// export default CardUi


//           second way for minimum card
const CardUi = (props) => {
    const noImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnO69Pi1ROzP35v1EELkDRvCkEkCm4i8xNNQ&s";
    const imageSrc = props.img || noImg;

    return (
        <> 
            
                <div className="card shadow border-0 mt-4 ">
                    <img src={imageSrc} alt="" className="card-img-top img-fluid"style={{ height: "300px"}} />
                    <div className="card-body text-center bg-light">
                        <h3 className="fw-bold text-primary">{props.title || "dummy title"}</h3>
                        <p className="text-muted">{props.para || "dummy para"}</p>
                    </div>
                </div>



                {/* <div className="card shadow border-0 mt-4 col-4">
                    <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" alt="" />
                    <div className="card-body">
                        <h3>{title || "dummy title"}</h3>
                        <p>{para || "dummy para"}</p>
                    </div>
                </div>

                <div className="card shadow border-0 mt-4 col-4">
                    <img src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg" alt="" />
                    <div className="card-body">
                        <h3>{title || "dummy title"}</h3>
                        <p>{para || "dummy para"}</p>
                    </div>
                </div> */}

        </>
    )
}
export default CardUi