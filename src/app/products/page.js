"use client";
import { useState } from "react";
import { products, filters } from "../DB/products";
import ProductCard from "../components/ProductCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useResponsive from "../hooks/useResponsive";

export default function Products() {
  const [activeTab, setValue] = useState(filters[0].id);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { isMobileDevice } = useResponsive();
  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "all") {
      setFilteredProducts(products);
    } else {
      const newProducts = products.filter(
        (item) => item.productType === newValue
      );
      setFilteredProducts(newProducts);
    }
  };
  return (
    <>
      <div className="product-page h-screen flex bg-center bg-blend-multiply bg-cover bg-no-repeat flex-col items-center justify-center p-3 lg:p-24">
        <h1 className="lg:text-5xl text-xl font-bold">Our Products</h1>
        <p className="text-center my-4 lg:w-3/5 text-sm lg:text-lg">
          Tackle a wide variety of projects including satcom, radar and telecomm
          systems for Defense and commercial customers.
          <br />
          <b>
            • RF Circuits, Components and Subsystems • Antennas and Arrays •
            Portable Radars
          </b>
        </p>
        <p className="text-center mt-5 lg:w-4/5 text-sm lg:text-lg">
          We Design, develop and manufacture the RF components and Subsystems
          for SIGINT, ELINT and COMINT systems for Land, Airborne and Navel
          Platforms. Provide the Hardware and software solutions to Telecom and
          Radar Communications
        </p>
      </div>
      <div className="bg-[#0D0D0D] lg:px-24">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="Product Filters"
          centered
          variant={isMobileDevice ? "scrollable" : "standard"}
          scrollButtons
          allowScrollButtonsMobile
        >
          {filters.map((item) => (
            <Tab key={item.id} value={item.id} label={item.title} />
          ))}
        </Tabs>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 my-6">
          {filteredProducts.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              imgUrl={product.imgUrl}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
