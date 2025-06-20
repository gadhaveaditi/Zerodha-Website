import GooglePlay from "../../assets/images/googlePlayBadge.svg";
import AppStore from "../../assets/images/appstoreBadge.svg";


function LeftSection({imageURL, ProductName, ProductDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-6 ">
                    <img src={imageURL}/>
                </div>

                <div className="col-6 p-5 mt-5">
                    <h1>{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <div >
                        <a href={tryDemo} style={{textDecoration : "none"}}>Try Demo →</a>
                        <a href={learnMore} style={{marginLeft : "50px", textDecoration : "none"}}>LearnMore →</a>
                    </div>
                    <div className="mt-3 mb-5">
                        <a href={googlePlay}><img src={GooglePlay}/></a>
                        <a href={appStore}><img src={AppStore} style={{marginLeft : "50px"}}/></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftSection;