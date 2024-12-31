import AboutUs from "./_compoents/AboutUs";
import Banner from "./_compoents/Banner";
import Charts from "./_compoents/charts/Charts";
import ChartsTwo from "./_compoents/charts/ChartsTwo";
import CompanyPhilosophy from "./_compoents/CompanyPhilosophy";
import CustomerFeedback from "./_compoents/CustomerFeedback";
import Footer from "./_compoents/Footer";
import News from "./_compoents/News";
import Offers from "./_compoents/Offers";
import Partners from "./_compoents/Partners";
import Register from "./_compoents/Register";
import Services from "./_compoents/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Partners />
      <AboutUs />
      <Services />
      <CompanyPhilosophy />
      <Charts />
      <ChartsTwo />
      <News />
      <Offers />
      <CustomerFeedback />
      <Register />
      <Footer />
    </div>
  );
}
