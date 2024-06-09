import React, { useEffect, useRef } from "react";
import HeroSlider from "../components/HeroSlider";
import { Filter_size_form } from "../components/Filter_size_form";
import Category_cards from "../components/Category_cards";
import Product_cards from "../components/Product_cards";
import Packing_quality from "../components/Packing_quality";
// import Faq from "../components/Faq";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <Filter_size_form/> 
      <Category_cards/>
      <Product_cards/>
      <Packing_quality/>
      {/* <div>
        <Faq/>
      </div> */}
    </>
  );
};

export default Index;
