import BannerImg from '../../assets/Img/Banner.jpg'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-12 gap-6'>
            {/* here is banner text after the navbar */}

            <div className=''>
            <h2 className='text-4xl font-bold px-10'>Nearshore & Offshore Software Development Centers for companies in Western Europe & USA </h2>
           
            <h2 className='text-2xl text-justify py-6 px-10 opacity-80 '>Whenever you are looking for a full-product development partner, a group of engineers, or a trusted party who will help you establish your own IT department in Bangladesh – we got you covered.</h2>
            
            <div className='bg-red-500 lg:px-6 lg:py-3 md:w-44 w-44 p-2 lg:w-44 ml-10 rounded gap-4 text-white flex  flex-row items-center justify-center'>
            <button className=" ">Get Started </button> <FaArrowRight></FaArrowRight>  </div>

            </div>

            {/* Banner Img */}

            <img className='w-full' src={BannerImg} alt="" />

        </div>
    );
};

export default Banner;