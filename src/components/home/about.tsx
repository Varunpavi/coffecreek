import React from "react";
import Button from "../ui/button";
export default function HomeAbout() {
  return (
    <div className="m-5 md:m-10 grid lg:grid-cols-2 gap-5 items-center">
      <div className="col-span-1">
        <span className="border-t-2 h-[1px] w-10 border-primary block my-5"></span>
        <h5 className="text-primary italic text-lg">
          Enjoy your time in our HomeStay
        </h5>
        <h2 className="text-4xl md:text-5xl my-5 font-Playfair">About Our HomeStay</h2>
        <p>
          Qed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ut enim
          ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur.
        </p>
        <p className="my-5">
          Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam
          condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis
          vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus
          dui egestas sit. Vulputate tincidunt viverra viverra etiam porta
          facilisis. Fames massa tortor sit nisl sit. Duis nulla tempus quisque
          et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at
          turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec
          lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta
          facilisis.
        </p>
        <Button variant="normal" size="medium" label="Read More"></Button>
      </div>
      <div className="col-span-1 relative">
        <div className="hidden md:block absolute top-10 -right-4 rounded-md before:content-[''] before:absolute before:left-[-10px] before:right-[-10px] before:top-[-10px] before:bottom-[-10px] before:border-dotted before:border-[1px] before:border-[#ccc] before:z-10 before:rounded-md shadow-lg">
          <img
            src="/assets/images/img_9.jpeg"
            alt=""
            width={200}
            height={400}
            className="relative shadow-lg shadow-[0px 30px 64px 0px rgba(0,0,0,.4)] rounded-md z-20"
          />
          <div className="absolute inset-0 bg-[#272535] opacity-50"></div>
        </div>
        <img
          src="/assets/images/img_12.jpeg"
          alt=""
          className="relative w-full h-auto rounded-2xl before:contents before:absolute before:inset-0 before:bg-[#272535] before:opacity-50"
        />

        {/* <span className="before:absolute before:left-10 before:-bottom-10 before:h-40 bg-[#f9f9f9] before:border-[1px] border-[#eee] rounded-md before:w-full before:z-[-10px]"></span> */}
        <div className="hidden md:block absolute bottom-8 md:-left-5 lg:-left-28 rounded-md before:content-[''] before:absolute before:left-[-10px] before:right-[-10px] before:top-[-10px] before:bottom-[-10px] before:border-dotted before:border-[1px] before:border-[#ccc] before:z-10 before:rounded-md">
          <img
            src="/assets/images/img_6.jpeg"
            alt=""
            width={200}
            height={200}
            className="relative shadow-lg shadow-[0px 30px 64px 0px rgba(0,0,0,.4)] rounded-md z-20"
          />
        </div>
      </div>
    </div>
  );
}
