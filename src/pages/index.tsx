import Testimonials from "@/components/about/testimonials";
import HomeAbout from "@/components/home/about";
import Carsoule from "@/components/home/carsoule";
import Rooms from "@/components/home/rooms";
import Services from "@/components/home/services";
import { getLayout } from "@/components/layouts/layout";
import Meta from "@/components/ui/meta";

const Home = () => {
  return (
    <>
      <Meta title={""} />
      <div className="relative">
        <Carsoule />
        <HomeAbout />
        <Rooms />
        <Services />
        <Testimonials />
      </div>
    </>
  );
};
export default Home;
Home.getLayout = getLayout;
