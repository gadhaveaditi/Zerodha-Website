

function RightSection({imageURL, ProductName, ProductDescription,  learnMore}) {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-6 p-5 mt-5">
                    <h1>{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <div >
                        <a href={learnMore} style={{marginLeft : "50px", textDecoration : "none"}}>LearnMore →</a>
                    </div>
                    
                </div>

                <div className="col-6 ">
                    <img src={imageURL}/>
                </div>

            </div>
        </div>
    );
}

export default RightSection;