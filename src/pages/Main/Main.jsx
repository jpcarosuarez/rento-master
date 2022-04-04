import React from "react";
import EasySafeContainer from "../../components/EasySafe-container/EasySafeContainer";
import Footeer from "../../components/footeer/Footeer";
import HeroslideContainer from "../../components/Heroslide-container/HeroslideContainer";
import Navbar from "../../components/Navbar/Navbar";
import RentContainer from "../../components/Rent-container/RentContainer";
import WelcomeContainer from "../../components/Welcome-container/WelcomeContainer";
import WhoContainer from "../../components/Who-container/WhoContainer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <WelcomeContainer />
      <RentContainer />
      <HeroslideContainer />
      <EasySafeContainer />
      <WhoContainer />
      <Footeer />
    </div>
  );
};

export default Main;
