import Footer from "../../components/Footer";
import { Navbar } from "../../layouts/Navbar";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import DeliveryImages from "./DeliveryImages";
import Income from "./Income";
import OrderProcess from "./OrderProcess";
import Services from "./Services";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <OrderProcess />
      <Services />
      <DeliveryImages />
      <Income />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Home;
