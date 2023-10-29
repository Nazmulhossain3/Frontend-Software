import BannerImg from '../../assets/Img/Banner.jpg'
const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-12 gap-6'>
            {/* here is banner text after the navbar */}

            <div className=''>
            <h2 className='text-4xl font-bold p-6'>Nearshore & Offshore Software Development Centers for companies in Western Europe & USA </h2>
           
            <h2 className='text-2xl text-justify py-6 px-4 opacity-80'>Whenever you are looking for a full-product development partner, a group of engineers, or a trusted party who will help you establish your own IT department in Poland – we got you covered.</h2>
            
            </div>

            {/* Banner Img */}

            <img className='w-full' src={BannerImg} alt="" />

        </div>
    );
};

export default Banner;