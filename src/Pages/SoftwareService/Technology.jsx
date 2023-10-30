import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Technology = () => {
const [images,setImages] = useState([])

useEffect(()=>{
    fetch('TechnologyData.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setImages(data)
    })

},[])



    return (
        <div >
            {/* here show the technology img which using to develop site */}

            <h2 className="px-12 mt-16 text-4xl text-center">Our teams are skilled in a wide variety of technology stacks</h2>

            <div className="px-24 py-16 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {
                    images.map((item,index)=> <div key={index}>

                    <img src={item.img} alt="" />
                    </div>)
                }
            </div>
            <div className='bg-red-600 lg:px-6 lg:py-3 md:w-44 w-72 p-2 lg:w-72  mx-auto md:mx-auto lg:mt-20 md:mt-20 mt-6 rounded gap-4 text-white flex  flex-row items-center justify-center'>
            <button className=" ">Book a Free Consultancy call </button> <FaArrowRight></FaArrowRight>  </div>
   
        </div>
    );
};

export default Technology;