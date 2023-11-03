import React from "react";
import Feature from "./Feature";

export default function Service({ service }) {
  const { roomQuality, price, location, features } = service;
  return (
    <div className="bg-blue-950 text-white rounded-lg py-2 px-4 flex flex-col">
      <h1 className="text-center my-2 px-4">
        <span className="text-6xl font-bold">{price}</span>
        /Mo
      </h1>
      <h1 className="text-3xl my-3 font-bold text-center">{roomQuality}</h1>
      <div className="mt-2 grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature} />
        ))}
      </div>
      <h1 className=" ">
        location:{" "}
        <span className="text-xl bg-orange-950 px-1 md:px-4 lg:px-8 rounded-xl">
          {location}
        </span>
      </h1>
    </div>
  );
}
