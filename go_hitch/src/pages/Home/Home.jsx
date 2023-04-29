import React from "react";
import GFooter from "../../components/footer/GFooter";
import GNavbar from "../../components/navbar/GNavbar";
import './Home.css'
import GRider_banner from "../../components/rider_banner/GRider_banner";
import GHero from "../../components/hero_section/GHero";
import GDesc from "../../components/desc/GDesc";

function Home() {
  return (
    <div>
      <GNavbar />
      {/* <h1>Home</h1> */}
      <GHero />
      <GDesc />
      <GRider_banner />
      <GFooter />
    </div>
  );
}

export default Home;
