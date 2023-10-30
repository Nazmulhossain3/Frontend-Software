import { FaArrowRight } from 'react-icons/fa';
import Offer1 from '../../assets/Img/offer1.webp'
import Offer2 from '../../assets/Img/offer2.webp'
import Offer3 from '../../assets/Img/offer3.webp'
const Offers = () => {
    return (
        <div>

            {/*This is all about our previous work experience */}

            <div className="p-12 ml-5 ">
                <p className="text-4xl font-semibold px-12">See how we’ve worked with companies like yours</p>
                <p className="mt-6 text-xl px-12 font-semibold opacity-50 text-justify">We helped many small, medium, and large companies with their struggle in building successful remote software development teams or the whole IT hubs located in Bangladesh.</p>
            </div>


          {/* work experience list one */}

            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 p-16 gap-16 mx-auto bg-[#FAFAFA]'>
                <img src={Offer1} alt="" />
               <div>
               <h2 className='text-4xl font-semibold ' >Building a software team
                for the unicorn in the cloud-kitchen industry</h2>
                
                <h2 className='mt-8 text-2xl font-semibold opacity-50'>Kitopi was looking for an option to scale its software development team for ongoing and future product development needs. </h2>
                <div className='bg-black lg:px-6 lg:py-3 md:w-44 w-44 p-2 lg:w-44 lg:mt-20 md:mt-20 mt-6 rounded gap-4 text-white flex  flex-row items-center justify-center'>
            <button className=" ">Learn More </button> <FaArrowRight></FaArrowRight>  </div>
               </div>
            </div>
          {/* work experience list two */}

            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 p-16 gap-16 mx-auto '>
             
               <div>
               <h2 className='text-4xl font-semibold ' >Establishing an entirely new, remote team for the UK’s first fully digital bank</h2>
                
                <h2 className='mt-8 text-2xl font-semibold opacity-50'>When Atom Bank contacted NxTide in June 2021, we were extremely excited. We knew this disruptive project aligned with our mission and the client’s ambitions. And so it begins… </h2>
                <div className='bg-black lg:px-6 lg:py-3 md:w-44 w-44 p-2 lg:w-44 lg:mt-20 md:mt-20 mt-6 rounded gap-4 text-white flex  flex-row items-center justify-center'>
            <button className=" ">Learn More </button> <FaArrowRight></FaArrowRight>  </div>
               </div>

               <img src={Offer2} alt="" />
            </div>
          
          
          
          {/* work experience list three */}

            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 p-16 gap-16 mx-auto bg-[#FAFAFA]'>
            <img src={Offer3} alt="" />
               <div>
               <h2 className='text-4xl font-semibold ' >Scaling a software development team for mobile payment startup</h2>
                
                <h2 className='mt-8 text-2xl font-semibold opacity-50'>KodyPay challenge here was to boost the development process by adding experienced developers to their existing team and integrating them with the local team in Berkshire, England.  </h2>
                <div className='bg-black lg:px-6 lg:py-3 md:w-44 w-44 p-2 lg:w-44 lg:mt-20 md:mt-20 mt-6 rounded gap-4 text-white flex  flex-row items-center justify-center'>
            <button className=" ">Learn More </button> <FaArrowRight></FaArrowRight>  </div>
               </div>

             
            </div>


           

            
        </div>
    );
};

export default Offers;