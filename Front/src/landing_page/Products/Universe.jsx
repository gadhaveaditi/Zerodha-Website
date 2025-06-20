import ZerodhaFund from "../../assets/images/zerodhaFundhouse.png";
import Streak from "../../assets/images/streakLogo.png";
import Sensibull from "../../assets/images/sensibullLogo.svg";
import SmallCase from "../../assets/images/smallcaseLogo.png";
import Ditto from "../../assets/images/dittoLogo.png";

function Universe() {
  return (
    <div className="container ">
      <div className="row text-center mt-5 p-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src={ZerodhaFund} style={{height : "55px"}}/>
          <p className="text-small text-muted mt-3 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={Sensibull} style={{height : "55px"}}/>
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src={SmallCase} style={{height : "55px"}}/>
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src={Streak} style={{height : "55px"}}/>
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        
        
        <div className="col-4 p-3 mt-5">
          <img src={SmallCase} style={{height : "55px"}}/>
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={Ditto} style={{height : "55px"}}/>
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-5 mb-5" style={{width : "20%", margin : "0 auto", color : "white"}}>Sign Up For Free</button>

      </div>
    </div>
  );
}

export default Universe;
