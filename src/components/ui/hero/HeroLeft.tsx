import Image from "next/image";
import { FC } from "react";
import Hero from "./Hero";


const HeroLeft: FC = () => {
    return (
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                Work in progress
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                We work everyday because we don't know life without our work.
            </p>
        </div>
    );
}

export default HeroLeft;
