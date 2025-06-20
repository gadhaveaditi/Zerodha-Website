import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

import Kite from "../../assets/images/kite.png";
import Coin from "../../assets/images/coin.png";
import Varsity from "../../assets/images/varsity.png";

import Console from "../../assets/images/console.png";
import KiteConnectAPI from "../../assets/images/kiteconnect.png";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={Kite}
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL={Console}
        ProductName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />

      <LeftSection
        imageURL={Coin}
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL={KiteConnectAPI}
        ProductName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />

      <LeftSection
        imageURL={Varsity}
        ProductName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <h4 className="mt-5 text-center mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
      <Universe />
    </>
  );
}

export default ProductPage;
