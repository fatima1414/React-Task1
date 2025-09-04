const Card = () => {
    return (
        <>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mx-auto">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/226424/pexels-photo-226424.jpeg" className="card-img-top w-100 h-60" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Garden</h5>
                            <p className="card-text">“A walk in nature walks the soul back home.” .</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/2734512/pexels-photo-2734512.jpeg" className="card-img-top w-100 h-60" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Spring</h5>
                            <p className="card-text">“Spring is nature's way of saying, 'Let's party!'”</p>
                        </div> 
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg" className="card-img-top w-100 h-60" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mountains</h5>
                            <p className="card-text">“How glorious a greeting the sun gives the mountains!”.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card