import Link from "next/link";

export default function About() {
  const dataPoints = [
    {
      subTitle: "Exemplary Solutions to Radio Frequency & Microwave Devices",
      description:
        "The team focus is to design and build Radio Frequency and Microwave devices for various applications in Defense and other R&D Labs. We offer a broad range of products driven with an innovative solutions for RF and Microwave products for Defense and Telecommunication technologies. RFMW Innovations lab Excel in Design and development of RF and Microwave.",
    },
    {
      subTitle: "Our Working Areas",
      description:
        "RFMW work in all market segments of RF and microwave including, Radar Sub Systems and Systems, EW, ECM, ESM and RWR Systems for Aerospace and Defense. Building the next Gen Systems for Tele-comm, IOT, Automotive and Health Care. To be a market leader in Miniaturization of Critical Wideband RF and Microwave Systems We Make systems which would Enhance and enrich people's lives. We help make the country self-reliant, in line with the make-in-India concept, on key technologies that had so far been dependent on imports. All this while keeping our customers and our people first.",
    },
  ];
  return (
    <>
      <div className="about-page h-screen flex bg-center bg-blend-multiply bg-cover bg-no-repeat flex-col items-center justify-center p-3 lg:p-24">
        <h1 className="lg:text-5xl text-xl font-bold"> About Us</h1>
        <p className="text-center my-4 lg:w-3/5 text-sm lg:text-lg">
          <b>The RFMW Innovations Lab</b> was founded in July 2018 by a team of
          IISc graduates.{" "}
        </p>
        <p className="text-center mt-5 lg:w-4/5 text-sm lg:text-lg">
          It has strong, motivated and highly qualified team of engineers. The
          team strength is to design and build Radio Frequency and Microwave
          circuits and systems for various applications in defense, telecom,
          automotive and others.RFMW Innovations Lab – The RF Start-up That’s
          Re-Inventing RF & Microwave Designs through innovative solutions. Work
          on cutting edge RF and Microwave circuits and system solutions @ DC to
          40 GHz.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#0D0D0D] py-12 lg:py-24 lg:px-36 px-4">
        <div className="lg:w-1/3">
          <p className="lg:text-5xl text-2xl text-center lg:text-left font-bold">
            Innovative Solutions
          </p>
        </div>
        <div className="lg:w-2/3 mt-5 lg:mt-0 text-center lg:text-left">
          <p className="lg:w-9/10  ">
            We work hard to produce the best product design in the market to
            make our customer happy. We aim to provide our clients with
            ingenious solutions to their problems
          </p>
          <Link href="/products">
            <button className="bg-[#0F62FE] mt-5  font-semi-bold text-white py-2 px-4">
              View Products &gt;
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-12 lg:py-24 px-4 lg:px-16 ">
        {dataPoints.map((data, index) => {
          return (
            <div
              key={index}
              className={`flex text-center lg:text-left flex-col-reverse ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }  lg:justify-between lg:items-center lg:px-24 py-6`}
            >
              <div className="lg:w-2/5 flex justify-center">
                <img src="../img.png" alt="mission" />
              </div>
              <div className="lg:w-2/3 ">
                <p className="text-3xl lg:text-5xl capitalize my-3 font-bold">
                  {data.subTitle}
                </p>
                <p className="lg:w-4/5">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col py-12 lg:py-24 px-4 lg:px-16">
        <p className="lg:text-5xl text-xl text-center font-bold">
          {" "}
          Meet Our Visionaries{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
          <div className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6">
            <img src={`../team1.png`} alt="Hemanth Gaddam" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Hemanth Gaddam, Phd </h3>
              <a href="https://www.linkedin.com/in/hemanth-gaddam-613631b7/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>

            <p className=" lg:w-4/5 text-sm">
             MD
            </p>
          </div>
          <div className="flex bg-[#0D0D0D] flex-col  py-6 lg:py-12 px-6">
            <img src={`../team2.png`} alt="Akash Agarwal" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Akash Agarwal</h3>
              <a href="https://www.linkedin.com/in/akash-agrawal-0645a052/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>
            <p className="lg:w-4/5 text-sm">
              CEO
            </p>
          </div>
          <div className="flex bg-[#0D0D0D] flex-col  py-6 lg:py-12 px-6">
            <img src={`../team3.png`} alt="Subin Joesph" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Subin Joesph</h3>
              <a href="https://www.linkedin.com/in/subin-joseph-317b2280/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>
            <p className=" lg:w-4/5 text-sm">
             CTO (Hardware)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
          <div className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6">
            <img src={`../team4.png`} alt="Neeraj Kumar" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Neeraj Kumar, PhD </h3>
              <a href="https://www.linkedin.com/in/neeraj-kumar-phd/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>

            <p className=" lg:w-4/5 text-sm">
            CTO (AI & Software)
            </p>
          </div>
          <div className="flex bg-[#0D0D0D] flex-col  py-6 lg:py-12 px-6">
            <img src={`../team5.png`} alt="Srikanth Reddy" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Srikanth Reddy</h3>
              <a href="https://www.linkedin.com/in/srikanth-reddy-aileni-2194a78/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>
            <p className="lg:w-4/5 text-sm">
            Director (Marketing)
            </p>
          </div>
          <div className="flex bg-[#0D0D0D] flex-col  py-6 lg:py-12 px-6">
            <img src={`../team6.png`} alt="Purnendu Sarkar" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Purnendu Sarkar</h3>
              <a href="https://www.linkedin.com/in/purnendu-sarkar-55094329/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>
            <p className=" lg:w-4/5 text-sm">
            VP (R&D)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
          <div className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6">
            <img src={`../team7.png`} alt="M Gunasekhar" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">M Gunasekhar</h3>
              <img src="../linkedin.png" alt="linkedin" />
            </div>

            <p className=" lg:w-4/5 text-sm">
            Director (Finance)
            </p>
          </div>

          <div className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6">
            <img src={`../team8.png`} alt="Hari Susarla" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Hari Susarla</h3>
              <a href="https://www.linkedin.com/in/hari-susarla-b589334/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>

            <p className=" lg:w-4/5 text-sm">
            GM, EW systems
            </p>
          </div>

          <div className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6">
            <img src={`../team9.png`} alt="Hari Susarla" className="h-[300px]" />
            <div className="flex justify-between items-center">
              <h3 className="text-2xl my-2 font-bold">Vijayashree Bhat, PhD</h3>
              <a href="https://www.linkedin.com/in/hari-susarla-b589334/" target="_blank" rel="noreferrer">
              <img src="../linkedin.png" alt="linkedin" />
              </a>
            </div>

            <p className=" lg:w-4/5 text-sm">
            {/* GM, EW systems */}
            </p>
          </div>
          
          
        </div>
      </div>
      <div className="flex flex-col items-center py-12 lg:py-24 px-4 lg:px-16">
        <p className="lg:text-5xl text-xl  font-bold">
          {" "}
          Want to join the team?{" "}
        </p>
        <button className="bg-[#0F62FE] mt-5 w-32   font-semi-bold text-white py-2 px-4">
          See Careers
        </button>
      </div>
    </>
  );
}
