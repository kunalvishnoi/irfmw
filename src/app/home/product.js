import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../DB/products";

export default function OurProduct() {
  return (
    <div className="flex flex-col py-6 lg:py-12 lg:px-24 px-4">
      <h3 className="my-3 text-2xl font-bold lg:text-4xl ">Our Products</h3>
      <p className="">
        We Design, develop and manufacture the RF components and Subsystems for
        SIGINT, ELINT and COMINT systems for Land, Airborne and Navel Platforms.
        Also, we provide Hardware and Software solutions to Telecom and Radar
        Communications.
      </p>
      <Link href="/products">
        <button className="bg-[#0F62FE] flex w-48 mt-5 font-semi-bold text-white py-2 px-4">
          View All Products &gt;
        </button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            imgUrl={product.imgUrl}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
