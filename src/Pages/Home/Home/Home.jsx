import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brand></Brand>
        </div>
    );
};

export default Home;