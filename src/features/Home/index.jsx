import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import DeliveryImages from "./DeliveryImages";
import Income from "./Income";
import OrderProcess from "./OrderProcess";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Banner />
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
