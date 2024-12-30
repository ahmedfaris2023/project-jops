import AboutUs from "./_compoents/AboutUs";
import Banner from "./_compoents/Banner";
import CompanyPhilosophy from "./_compoents/CompanyPhilosophy";
import Partners from "./_compoents/Partners";
import Services from "./_compoents/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Partners />
      <AboutUs />
      <Services />
      <CompanyPhilosophy />
    </div>
  );
}
