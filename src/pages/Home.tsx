import Header from "../components/Layouts/Header/Header";
import HomeBanner from "../components/Layouts/HomeBanner/HomeBanner";
import Category from "../components/Layouts/Category/Category";
import Flashsale from "../components/Layouts/FlashSale/Flashsale";
import HomePageMall from "../components/Layouts/HomePageMall/HomePageMall";
import RecommendProducts from "../components/Layouts/RecommendProducts/RecommendProducts";
import Footer from "../components/Layouts/Footer/Footer";
import InformationBlock from "../components/Layouts/InformationBlock/Information";
function Home() {
    return(
        <div>
            <Header />
            <HomeBanner />
            <Category />
            <Flashsale />
            <HomePageMall />
            <RecommendProducts />
            <Footer />
            <InformationBlock />
        </div>
    );
}
export default Home;