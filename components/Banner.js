import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="bg-white text-purple-500 px-10 py-4 rounded-full shadow-md hover:shadow-lg active:scale-90 my-3 transition duration-150 font-bold">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
