export default function OurProduct() {
return(
    <div className="flex flex-col py-6 lg:py-12 lg:px-24 px-4">
        <h3 className="my-3 text-2xl font-bold lg:text-4xl ">Our Products</h3>
        <p className="">We Design, develop and manufacture the RF components and Subsystems for SIGINT, ELINT and COMINT systems for Land, Airborne and Navel Platforms. Also, we provide Hardware and Software solutions to Telecom and Radar Communications.</p>
        <button className="bg-[#0F62FE] flex w-48 mt-5 font-semi-bold text-white py-2 px-4">View All Products --</button>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 gap-8 my-6">
            <div className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6">
                <img  src={`../p1.png`} alt="Active Phased Array Antennas" />
                <h3 className="text-2xl my-2 font-bold">Active Phased Array Antennas</h3>
                <p className=" lg:w-4/5 text-sm">Description for the Antenna/Product</p>
            </div>
            <div className="flex bg-[#0D0D0D] flex-col  py-6 lg:py-12 px-6">
                <img  src={`../p2.png`} alt="Technical Support" />
                <h3 className="text-2xl my-2 font-bold">Hybrid RF Circuits</h3>
                <p className="text-center lg:w-4/5 text-sm">Description for the Antenna/Product</p>
            </div>
            <div className="flex bg-[#0D0D0D] flex-col  py-6 lg:py-12 px-6">
                <img  src={`../p3.png`} alt="Training" />
                <h3 className="text-2xl my-2 font-bold">TR Modules</h3>
                <p className="text-center lg:w-4/5 text-sm">Description for the Antenna/Product</p>
            </div>
        </div>
    </div>
)
}