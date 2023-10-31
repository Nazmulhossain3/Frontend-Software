import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSection.css';
import {  Pagination,} from 'swiper/modules';

import project1 from '../../assets/Img/project1.webp'
import project2 from '../../assets/Img/project2.webp'
import project3 from '../../assets/Img/project3.webp'
import project4 from '../../assets/Img/project4.webp'
import project5 from '../../assets/Img/project5.webp'
import project6 from '../../assets/Img/project6.webp'
import project7 from '../../assets/Img/project7.webp'

const SliderSection = () => {
    return (
        <div className='px-24'>
            <h2 className='mt-16 text-4xl font-bold text-center mb-6'>More projects accomplished by our company:</h2>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
      
      <div>
      <img src={project1} alt="" />
      <p  className='mt-2 opacity-50'>WebInterPret</p>
      </div>
       
        </SwiperSlide>
      
      
        <SwiperSlide>
          <div>
          <img src={project2} alt="" />
          <p className=' opacity-50'>Unlocked</p>
          </div>
          </SwiperSlide>
      
        <SwiperSlide>
        <div>
        <img src={project3} alt="" />
        <p className=' opacity-50'>Atom</p>
        </div>
        </SwiperSlide>
      
        <SwiperSlide>
        <div>
        <img src={project4} alt="" />
        <p className='mt-2  opacity-50'>Discover cracov</p>
        </div>
        </SwiperSlide>
        
      
        <SwiperSlide>
          <div>
          <img src={project5} alt="" />
          <p className=' opacity-50'>UItiArena</p>
          </div>
        
        </SwiperSlide>
       
       
       
        <SwiperSlide>
        <div>
        <img src={project6} alt="" />
        <p className=' opacity-50'>Frost</p>
        </div>
        </SwiperSlide>
       
       
        <SwiperSlide>
        <div>
        <img src={project7} alt="" />
        <p className=' opacity-50'>With health</p>
        </div>
        
        </SwiperSlide>
       
      </Swiper>
   
            
        </div>
    );
};

export default SliderSection;