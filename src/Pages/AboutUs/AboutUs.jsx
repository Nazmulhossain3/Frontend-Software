import BrandPromise from "./BrandPromise";
import Experience from "./Experience";
import Identification from "./Identification";
import ManagementTeam from "./ManagementTeam";
import Vision from "./Vision";

const AboutUs = () => {
    return (
        <div>
          <Identification></Identification>
          <Vision></Vision>
          <BrandPromise></BrandPromise>
          <Experience></Experience>
          <ManagementTeam></ManagementTeam>
        </div>
    );
};

export default AboutUs;