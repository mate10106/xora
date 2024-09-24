import { Element, Link as LinkScrool } from "react-scroll";
import { Button } from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-image", {
      opacity: 0,
      x: 100,
      delay: 0.1,
      duration: 4,
      ease: "back.out",
    });
    gsap.from("#hero-text", {
      opacity: 0,
      x: -100,
      delay: 0.3,
      duration: 2,
      ease: "back.out",
    });
  }, []);

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div
            id="hero-text"
            className="relative z-2 max-w-512 max-lg:max-w-388"
          >
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-12">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and susprisingly powerful.
            </p>
            <LinkScrool to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScrool>
          </div>

          <div
            id="hero-image"
            className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res"
          >
            <img
              src="/images/hero.png"
              alt="Hero"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
