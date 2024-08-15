import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E4FFF2] to-[#DBFFF6]">
      <Navbar />
      <div className="text-green flex flex-row justify-between ml-4 pt-28">
        <div>
          <h1 className="text-[#308967] text-7xl ml-14 font-bold">
            LOREM <span className="text-white bg-[#308967]">IPSUM</span>
          </h1>
          <p className="ml-16 mr-[680px] pt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, sed
            aut sunt nesciunt aspernatur, officia id rem placeat nostrum enim
            blanditiis minima voluptas? Sit amet, modi suscipit dolorem itaque
            temporibus.
          </p>
        </div>
        <div className="text-black">
         
        </div>
      </div>
    </div>
  );
}

export default page;
