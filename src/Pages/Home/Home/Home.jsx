import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import CustomerSay from "../CustomerSay/CustomerSay";
import FAQ from "../FAQ/FAQ";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            
            <CustomerSay></CustomerSay>

            <Brand></Brand>

            <FAQ></FAQ>
        </div>
    );
};

export default Home;