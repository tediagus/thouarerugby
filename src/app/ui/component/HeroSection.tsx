"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Pour le retour du {""}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "RUGBY ",
                1000,
                "RUGBY à Thouaré",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7B3] text-base sm:text-lg mb-6 lg:text-xl">
            Découvrez le monde passionnant du rugby et rejoignez notre mission
            pour créer un club de rugby dynamique au cœur de notre ville.
            Plongez dans l&#39;action, l&#39;histoire et la culture de ce sport
            emblématique, et ensemble, faisons du rêve d&#39;un club de rugby
            local une réalité !
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Me contacter
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/zoom-ball.jpg"
              alt="ball"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
