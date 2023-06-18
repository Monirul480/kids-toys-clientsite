import Banner from '../Banner/Banner';
import ShopByCategory from '../Shop/ShopByCategory';
import Gellaery from '../Gellaery/Gellaery';
import ReviewCard from '../Review/ReviewCard';
import WebsiteStatus from '../SiteStatus/WebsiteStatus';
import useTitle from '../../../hooks/useTitle';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gellaery></Gellaery>
            <ShopByCategory></ShopByCategory>
            <ReviewCard></ReviewCard>
            <WebsiteStatus></WebsiteStatus>
        </div>
    );
};

export default Home;