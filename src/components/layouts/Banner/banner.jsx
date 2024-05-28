import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { title } from "process";

export default function Banner() {
  const router = useRouter();
  const currentPage = router.pathname.substring(1);

  const values = [
    {
      className: "bg-about bg-cover bg-center bg-no-repeat h-[560px]",
      page: "About",
      title: "About The HomeStay",
      home: "Home",
    },
    // Add more pages as needed
  ];

  const currentPageValue = values.find(
    (value) => value.page.toLowerCase() === currentPage.toLowerCase()
  );

  return (
    <div className="relative">
      <div className={currentPageValue?.className}>
        <div className="absolute inset-0 bg-[#272535] opacity-60"></div>   
        <div className="absolute top-1/2 lg:top-1/2 mx-auto lg:left-1/4 lg:right-96 text-center">
        <span className="w-10 h-[1px] bg-primary mx-auto block mb-5"></span>
          <span className="italic text-primary text-xl my-5">Enjoy your time in our Hotel with pleasure.</span>
          <h5 className="text-4xl md:text-6xl my-5 text-white leading-normal">{currentPageValue?.title}</h5>
        </div>     
      </div>
      <div className="flex justify-center items-center gap-5 bg-white p-5 uppercase relative rounded-b-lg shadow-lg">
        <Link href="/" className="font-jost">{currentPageValue?.home}</Link>
        <span className="font-jost">pages</span>
        <span className="font-jost">{currentPageValue?.page}</span>
      </div>
    </div>
  );
}
