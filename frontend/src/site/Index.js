import React, { useEffect, useRef } from "react";
import HeroSlider from "../components/HeroSlider";
import { Filter_size_form } from "../components/Filter_size_form";
import Category_cards from "../components/Category_cards";
import Product_cards from "../components/Product_cards";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <Filter_size_form/> 
      <Category_cards/>
      <Product_cards/>
    </>
  );
};

export default Index;
