import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import DelibhaiServices from "./DelibhaiServices";
import DeliveryImages from "./DeliveryImages";
import Income from "./Income";
import OrderProcess from "./OrderProcess";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Banner />
      <DelibhaiServices />
      <OrderProcess />
      <Services />
      <DeliveryImages />
      <Income />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;
