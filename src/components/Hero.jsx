import food1 from "../assets/food1.jpeg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] xl:max-h-[700px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] xl:max-h-[700px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] xl:max-h-[700px] object-cover"
          src={food1}
          alt="hamburger and potato chips"
        />
      </div>
    </div>
  );
};

export default Hero;
