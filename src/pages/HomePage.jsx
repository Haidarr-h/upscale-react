import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Konten from "../components/Konten";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero></Hero>
      <Partners></Partners>
      <Konten></Konten>
    </div>
  );
};

export default Home;
