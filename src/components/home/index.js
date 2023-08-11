import Header from "../header";
import Menu from "../menu";
import Banner from "../banner"
import WhyBuy from "../whyBut";
import Brands from "../brands";
import Shelf from "../shelf";
import InfoCard from "../infoCard";
import Newsletter from "../newsletter";
import Faq from "../faq";
import FaqDesktop from "../faq-desktop";
import FooterSite from "../footer";




function Home() {
  return (
    <div >
        <Header/>
        <Menu/>
        <Banner/>
        <WhyBuy/>
        <Brands/>
        <Shelf/>
        <InfoCard/>
        <Newsletter/>
        <Faq/>
        <FaqDesktop/>
        <FooterSite/>

    </div>
  );
}

export default Home;
