import React from "react";
import Button from "../ui/button";
export default function HomeAbout() {
  return (
    <div className="m-5 md:m-10 grid lg:grid-cols-2 gap-5 items-center">
      <div className="col-span-1">
        <span className="border-t-2 h-[1px] w-10 border-primary block my-5"></span>
        <h4 className="text-primary italic text-lg">Enjoy your time in our HomeStay</h4>
        <h2 className="text-3xl md:text-5xl my-5 leading-normal">About Our HomeStay</h2>
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
        <Button variant="normal" size="medium" label="Call For Reservation"></Button>
      </div>
      <div className="col-span-1 relative">
        <img
          src="/assets/images/img_11.jpeg"
          alt=""
          className="w-full h-auto rounded-2xl"
        />
         <div className="absolute inset-0 bg-[#272535] opacity-40 rounded-2xl"></div>
      </div>
    </div>
  );
}
