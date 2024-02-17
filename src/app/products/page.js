import { products } from "../DB/products";
import ProductCard from "../components/ProductCard";

export default function About() {
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
        <p className="lg:text-5xl text-2xl text-center lg:text-left font-bold">
          Innovative Solutions
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 my-6">
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
    </>
  );
}
