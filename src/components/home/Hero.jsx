import { Button } from "../ui/button";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="mt-[120px]">
        <h1 className="lg:text-8xl md:text-6xl text-2xl text-center font-bold text-white">
          Point of sale & inventory management{" "}
          <span className="text-[#4DBE18]">Software</span>
        </h1>
        <div className="flex justify-center gap-12 py-10 mt-10">
          <Button
            variant="primary"
            className="bg-[#4DBE18] rounded-full md:text-xl md:p-6 text-white"
          >
            Get Started
          </Button>
          <Button
            variant="primary"
            className="bg-[#4DBE18] rounded-full md:text-xl md:p-6 text-white"
          >
            View Demo
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
