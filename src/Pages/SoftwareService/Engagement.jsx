/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight, FaHandshake } from "react-icons/fa";
const Engagement = () => {
    return (
        <div className="bg-[#FAFAFA] mt-8">

            <h2 className=" px-16 py-12 text-center text-4xl ">Our engagement models</h2>

            <div><FaHandshake  className="flex flex-row mx-auto text-8xl text-red-500"></FaHandshake></div>

            {/* here how to engage with us info */}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center px-24 gap-8 py-16">
                <div className=" border p-6 bg-white">
                    <h2 className="text-5xl text-red-700 font-bold">1</h2>
                    <h2 className="mt-3 text-3xl font-bold opacity-50">Let's chat</h2>
                    <p className="mt-6 text-xl opacity-50">Tell us about your company, services, used technologies and desired team composition</p>
                </div>
                <div className=" border p-6 bg-white">
                    <h2 className="text-5xl text-red-700 font-bold">2</h2>
                    <h2 className="mt-3 text-3xl font-bold opacity-50">We attract the best candidates</h2>
                    <p className="mt-6 text-xl opacity-50">We run marketing campaigns and test candidates in technical and cultural aspects</p>
                </div>
           
                <div className=" border p-6 bg-white">
                    <h2 className="text-5xl text-red-700 font-bold">3</h2>
                    <h2 className="mt-3 text-3xl font-bold opacity-50">You decide on hiring</h2>
                    <p className="mt-6 text-xl opacity-50">We propose the best candidates and it's up to you who do you want to work with</p>
                </div>
                <div className=" border p-6 bg-white">
                    <h2 className="text-5xl text-red-700 font-bold">4</h2>
                    <h2 className="mt-3 text-3xl font-bold opacity-50">We do the onboarding</h2>
                    <p className="mt-6 text-xl opacity-50">We sign the documents with the best candidates, give them equipment and onboard them</p>
                </div>
                <div className=" border p-6 bg-white">
                    <h2 className="text-5xl text-red-700 font-bold">5</h2>
                    <h2 className="mt-3 text-3xl font-bold opacity-50">You can hire them directly</h2>
                    <p className="mt-6 text-xl opacity-50">After first 3 months of cooperation, you can hire our employees directly, and keep the acquired knowledge</p>
                </div>




            </div>
            
        {/* learn more button here */}

        <div className='bg-black lg:px-6 lg:py-3 md:w-44 w-72 p-2 lg:w-72  mx-auto md:mx-auto lg:mt-20 md:mt-20  rounded gap-4 text-white flex  flex-row items-center justify-center '>
            <button className=" ">Learn more about how we work </button> <FaArrowRight></FaArrowRight>  </div>

        </div>
    );
};

export default Engagement;