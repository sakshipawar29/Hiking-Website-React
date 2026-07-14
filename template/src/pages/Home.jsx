import "../assets/style.css";


import Banner from "../components/Banner";
import Camping from "../components/Camping";
import RockClimbing from "../components/RockClimbing";
import Hero from "../components/Hero";
import Nature from "../components/Nature";
import Places from "../components/Places";
import Mountaineering from "../components/Mountaineering";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      
      <Banner />
      <Camping />
      <RockClimbing />
      <Hero />
      <Nature />
      <Places />
      <Mountaineering />
      <Quote />
      <Footer />
    </>
  );
}

export default Home;