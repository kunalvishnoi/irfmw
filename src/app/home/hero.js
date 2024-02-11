export default function HeroSection() {
  return (
    <>
      <main className="home-page bg-center flex h-screen flex-col items-center justify-center p-3 lg:p-24">
        <h1 className="lg:text-5xl text-xl font-bold">
          {" "}
          Solutions to RF & Microwave Field
        </h1>
        <p className="text-center my-4 lg:w-3/5 text-sm lg:text-lg">
          Providing the Defense Services with solutions to their toughest
          technical challenges in order to better equip them with a{" "}
          <b>DECISIVE </b> advantage during the adversaries situations
        </p>
        <button className="bg-white font-semi-bold py-2 px-4 text-black">
          Learn More{" "}
        </button>
      </main>
    </>
  );
}
