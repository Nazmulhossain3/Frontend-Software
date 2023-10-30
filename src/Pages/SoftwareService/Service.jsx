import Engagement from "./Engagement";
import KnowMore from "./KnowMore";
import ProjectBrand from "./ProjectBrand";
import SoftwareTeam from "./SoftwareTeam";
import TeamWork from "./TeamWork";
import Technology from "./Technology";
import Testomonial from "./Testomonial";

const Service = () => {
    return (
        <div>
          <SoftwareTeam></SoftwareTeam>
          <ProjectBrand></ProjectBrand>
          <KnowMore></KnowMore>
          <Technology></Technology>
          <Engagement></Engagement>
          <TeamWork></TeamWork>
          <Testomonial></Testomonial>
        </div>
    );
};

export default Service;