import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Meta from "@/components/ui/meta";
import Banner from "@/components/layouts/Banner/banner";
// import Testimonials from "@/components/about/testimonials";
export default function Rooms() {
  return (
    <div>
      <Meta title={"Rooms - "} />
      <div className="relative">
        <Banner />
      </div>
    </div>
  );
}

Rooms.getLayout = getLayout;
