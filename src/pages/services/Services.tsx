
import BannerSection from "../../components/banner/Banner";
import { ServiceOfferings } from "../../components/banner/ServiceOfferings";
import DevelopmentWorkflow from "../../components/development_workflow/Development_Workflow";
import DevelopmentOutsourcing from "../../components/developmentOutsourcing/DevelopmentOutsourcing";
import { LogoSlider } from "../../components/logo_slider/LogoSlider";
import { ProfessionalBanner } from "../../components/professional_banner/Professional_Banner";
import Container from "../../components/shared/header/Container";
import SoftwareDevelopmentServices from "../../components/softwareDevelopmentServices/SoftwareDevelopmentServices";
import TechnologySection from "../../components/technology/Technology";
import TestimonialsSlider from "../../components/testimonials/Testimonials_Slider";

const Services = () => {
    return (
        <div>
            <Container>
                <BannerSection />
                <ServiceOfferings />
                <LogoSlider />
            </Container>
            <ProfessionalBanner />
            <SoftwareDevelopmentServices />
            <DevelopmentOutsourcing />
            <DevelopmentWorkflow/>
            <TechnologySection/>
            <TestimonialsSlider/>
        </div>
    );
};

export default Services;