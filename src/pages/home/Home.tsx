import BannerSection from "../../components/banner/Banner";
import { ServiceOfferings } from "../../components/banner/ServiceOfferings";
import { LogoSlider } from "../../components/logo_slider/LogoSlider";

const Home = () => {
    return (
        <div>
            <BannerSection />
            <ServiceOfferings/>
            <LogoSlider/>
        </div>
    );
};

export default Home;