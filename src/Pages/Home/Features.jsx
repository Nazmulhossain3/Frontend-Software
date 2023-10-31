import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const Features = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 text-center mt-24">
        
            {/* here is software team info */}
            <div data-aos="fade-up">
                <h1 className="text-4xl font-bold">Software team</h1>
                <h1 className="mt-2 text-4xl font-bold opacity-30">Extension</h1>
                <h4 className="mt-4 text-xl font-bold">Developers: 1-5</h4>
                <h4 className="font-bold opacity-50">Delivery time: 0-2 months</h4>
                <p className="mt-2 opacity-60">A partially managed team that works within your processes. Best for providing additional capacity or competencies to the existing teams.</p>
            </div>
            
      {/* Dedicated Software team info */}
               <div data-aos="fade-up">
               <h1 className="text-4xl font-bold">Dedicated</h1>
                <h1 className="mt-2 text-4xl font-bold opacity-30">Software team</h1>
                <h4 className="mt-4 text-xl font-bold">Developers: 15-25</h4>
                <h4  className="font-bold opacity-50">Delivery time: 1-4 months</h4>
                <p className="mt-2 opacity-60"> Fully managed, cross-functional team that works within our processes on goals set by you. Does not require IT personnel on your side.</p>
    
               </div>
    
    {/* it hub info */}
            <div data-aos="fade-down">
            <h1  className="text-4xl font-bold">IT Development</h1>
                <h1  className="mt-2 text-4xl font-bold opacity-30">Hub</h1>
                <h4 className="mt-4 text-xl font-bold">Developers: 15-25</h4>
                <h4  className="font-bold opacity-50">Delivery time: 1-4 months</h4>
                <p className="mt-2 opacity-60"> Fully managed, cross-functional team that works within our processes on goals set by you. Does not require IT personnel on your side.</p>
    
            </div>


    
        </div>
    );
};

export default Features;