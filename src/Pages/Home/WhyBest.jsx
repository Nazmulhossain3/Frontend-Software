import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import AOS from 'aos';

import 'aos/dist/aos.css';

const WhyBest = () => {
    const [datas,setDatas] = useState([])

    useEffect(()=>{
        fetch('WhyBest.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDatas(data)
        })



    },[])

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div className="bg-[#FAFAFA]">
            {/* here some info why we are best */}

           <div className="py-24 px-16">
           <h1 className="text-4xl font-semibold">Learn why Big Tech have development centers in Bangladesh</h1>
       
           
       <h1 className="mt-12 text-2xl font-semibold opacity-50">Software Developers from Poland are ranked in the Top 5 positions in global IT skills ranks. This is why corporations like Google, Amazon, and Revolut are opening their IT hubs in the cities like Dhaka, Chittagong, Barisal, Sylhet.</h1>

       <div className='bg-red-600 lg:px-6 lg:py-3 md:w-44 w-72 p-2 lg:w-72 lg:mx-auto md:mx-auto lg:mt-20 md:mt-20 mt-6 rounded gap-4 text-white flex  flex-row items-center justify-center'>
            <button className=" ">Book a Free Consultancy call </button> <FaArrowRight></FaArrowRight>  </div>
   
           </div>
       
    {/* here fetch data  */}
    
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-16 gap-10">
        {
            datas.map((item,index)=> <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
          
            data-aos-offset="0"  className="border bg-white p-8" key={index}>

                <img className="w-14 h-14" src={item.img} alt="" />
                <h1 className="mt-4 text-xl font-bold">{item.title}</h1>
                <h1 className="mt-4 font-semibold opacity-50">{item.description}</h1>

            </div>)
        }

      </div>
       
       
       
       
        </div>
    );
};

export default WhyBest;