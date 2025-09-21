
import BannerSection from "../../components/banner/Banner";
import { ServiceOfferings } from "../../components/banner/ServiceOfferings";
import { LogoSlider } from "../../components/logo_slider/LogoSlider";
import { ProfessionalBanner } from "../../components/professional_banner/Professional_Banner";
import Container from "../../components/shared/header/Container";
import SoftwareDevelopmentServices from "../../components/softwareDevelopmentServices/SoftwareDevelopmentServices";

const Home = () => {
    return (
        <div>
            <Container>
                <BannerSection />
                <ServiceOfferings />
                <LogoSlider />
            </Container>
            <ProfessionalBanner />
            <SoftwareDevelopmentServices />
        </div>
    );
};

export default Home;