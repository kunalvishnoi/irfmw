import { missions } from "App/DB/mission";

export default function MissionSection() {
  return (
    <div className="flex flex-col py-6 lg:py-12 px-4">
      {missions.map((data, index) => {
        return (
          <div
            key={index}
            className={`flex text-center lg:text-left flex-col-reverse ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }  lg:justify-between lg:items-center lg:px-24 py-6`}
          >
            <div className="lg:w-2/5 flex justify-center">
              <img src="../img.png" alt="mission" />
            </div>
            <div className="lg:w-2/3 ">
              <h2 className="text-xl lg:text-2xl text-[#8D8D8D] uppercase font-bold">
                {data.title}
              </h2>
              <p className="text-3xl lg:text-5xl capitalize my-3 font-bold">
                {data.subTitle}
              </p>
              <p className="lg:w-3/5">{data.description}</p>
              <button className="bg-[#0F62FE] mt-5 font-semi-bold text-white py-2 px-4">
                {data.buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
