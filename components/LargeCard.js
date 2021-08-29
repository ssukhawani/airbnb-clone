import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="py-16 relative cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-28 left-10 md:top-32 md:left-16">
        <h3 className="text-3xl md:text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 
            px-4 py-2 mt-5 rounded-lg hover:bg-gray-700 active:scale-95 transform transition duration-100">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
