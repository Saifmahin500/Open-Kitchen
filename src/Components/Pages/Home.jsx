import BrandCard from "../BrandCard/BrandCard";
import Delivery from "../Delivary/Delivery";
import Team from "../Team/Team";
import Banner from "../header/Banner";



const Home = () => {
    return (
        <div>       
            <Banner></Banner>
          <div className="max-w-6xl mx-auto">
          <BrandCard></BrandCard>
           <Delivery></Delivery>
           <Team></Team>
          </div>
           
        </div>
    );
};

export default Home;