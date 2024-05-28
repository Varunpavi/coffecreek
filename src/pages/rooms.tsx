import React from "react";
import { getLayout } from "@/components/layouts/layout";
import Meta from "@/components/ui/meta";
import Banner from "@/components/layouts/Banner/banner";
export default function Rooms() {
  return (
    <>
      <Meta title={"Rooms - "} />
      <div className="relative">
        <Banner />
      </div>
    </>
  );
}

Rooms.getLayout = getLayout;
