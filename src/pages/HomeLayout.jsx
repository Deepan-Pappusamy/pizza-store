import Hero from "./Hero";
import CustomizePizza from "../components/CustomizePizza";
import BrandPromise from "../components/BrandPromise";
import CustomerSupport from "../components/CustomerSupport";
import TopOffers from "../components/TopOffers";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <TopOffers />
      <CustomizePizza />
      {/* <BrandPromise /> */}
      <CustomerSupport />
    </div>
  );
};

export default HomeLayout;
