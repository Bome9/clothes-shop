import Image from "next/image";
import { FC } from "react";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

const Hero: FC = () => {
    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16 ">
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    );
}

export default Hero;
