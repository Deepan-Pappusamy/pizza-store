import Hero from "./Hero";
import InitialLoader from "../components/InitialLoader";
import CustomizePizza from "../components/CustomizePizza";
import CustomerSupport from "../components/CustomerSupport";
import TopOffers from "../components/TopOffers";
import { useState } from "react";

const HomeLayout = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  return (
    <>
      {!heroLoaded && <InitialLoader />}
      <Hero
        onLoaded={() => setHeroLoaded(true)}
        onFail={() => setHeroLoaded(true)}
      />
      {heroLoaded && (
        <>
          <TopOffers />
          <CustomizePizza />
          <CustomerSupport />
        </>
      )}
    </>
  );
};

export default HomeLayout;
