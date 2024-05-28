import Contactform from "@/components/contact/form";
import { getLayout } from "@/components/layouts/layout";
import Meta from "@/components/ui/meta";
import Banner from "@/components/layouts/Banner/banner";
import Map from "@/components/contact/map";

export default function Contact() {
  return (
    <div>
      <Meta title={"Rooms - "} />
      <div className="relative">
        <Banner />
        <div className="grid grid-cols-1 lg:grid-cols-2 m-5 md:m-10 gap-5">
            <Contactform />
            <Map />
        </div>
      </div>
    </div>
  );
}

Contact.getLayout = getLayout;
