import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Meta from "@/components/ui/meta";
import Banner from "@/components/layouts/Banner/banner";
import Aboutpage from "@/components/about/about";
import Counter from "@/components/about/counter";
import Testimonials from "@/components/about/testimonials";
export default function About() {
  return (
    <>
      <Meta title={"About - "} />
      <div className="relative">
        <Banner />
        <Aboutpage />
        <Counter />
        <Testimonials />
      </div>
    </>
  );
}
About.getLayout = getLayout;
