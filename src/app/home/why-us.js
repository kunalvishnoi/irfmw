import { whyUsData } from "App/DB/whyUsData";

export default function WhyUs() {
  return (
    <div className="flex flex-col py-6 lg:py-12 px-4">
      <h3 className="text-center my-3 text-xl lg:text-2xl text-[#8D8D8D]">
        Why Choose Us
      </h3>
      <p className="text-center text-3xl lg:text-5xl font-bold">Key Insights</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
        {whyUsData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex bg-[#0D0D0D] flex-col items-center py-6 lg:py-12 px-6"
            >
              <img src={`../w${index + 1}.png`} alt={data.title} />
              <h3 className="text-2xl my-2 font-bold">{data.title}</h3>
              <p className="text-center lg:w-4/5 text-sm">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
