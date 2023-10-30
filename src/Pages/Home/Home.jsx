import SliderSection from "../../Component/Slider/SliderSection";
import Banner from "./Banner";
import Features from "./Features";
import Offers from "./Offers";
import WhyBest from "./WhyBest";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Features></Features>
           <Offers></Offers>
           <WhyBest></WhyBest>
           <SliderSection></SliderSection>
        </div>
    );
};

export default Home;