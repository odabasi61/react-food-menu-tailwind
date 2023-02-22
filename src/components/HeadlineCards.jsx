import food2 from "../assets/food2.jpeg";
import food3 from "../assets/food3.jpeg";
import food4 from "../assets/food4.jpeg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-lx relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lx text-white">
          <p className="font-bold text-2xl md:text-xl xl:text-2xl px-2 pt-4">
            The ultimate fast-food experience
          </p>
          <p className="px-2">Throught 7/24</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:nax-h-[200px] w-full object-cover rounded-xl"
          src={food2}
          alt="nice fastfood"
        />
      </div>

      {/* card */}
      <div className="rounded-lx relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lx text-white">
          <p className="font-bold text-2xl md:text-xl xl:text-2xl px-2 pt-4">
            More than just a burger
          </p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:nax-h-[200px] w-full object-cover rounded-xl"
          src={food3}
          alt="nice fastfood"
        />
      </div>

      {/* card */}
      <div className="rounded-lx relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lx text-white">
          <p className="font-bold text-2xl md:text-xl xl:text-2xl px-2 pt-4">
            Bite into happiness with every burger
          </p>
          <p className="px-2">Available on Lunch</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:nax-h-[200px] w-full object-cover rounded-xl"
          src={food4}
          alt="nice fastfood"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
