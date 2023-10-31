import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const SoftwareTeam = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-24">
            {/* here is software team info  */}

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
                <h2 className="text-4xl font-bold text-red-500 ">Start new initiatives with a dedicated software team</h2>
                <h2 className="mt-8 text-xl font-semibold opacity-60">If your in-house team is being overworked, or you are in need of a development team on your side projects, outsourcing a dedicated software team might be the solution for you. With our help, you can extend your team at specific technology or add completely new skills to the team.</h2>
                <div className='bg-red-500 md:w-44 lg:w-44 mt-12 w-44 lg:px-6  lg:py-3 p-3 rounded text-white flex flex-row lg:flex-row items-center gap-4'>
 <button className=" ">Reach Out </button> <FaArrowRight></FaArrowRight>  </div>
            </div>
            <img  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     src="https://nxtide.com/wp-content/uploads/2022/10/Pragmatic_Coders_mini-30-1024x683.jpg" alt="" />
        </div>
    );
};

export default SoftwareTeam;