import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import FAQ from "../FAQ/FAQ";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brand></Brand>

            <FAQ></FAQ>
        </div>
    );
};

export default Home;