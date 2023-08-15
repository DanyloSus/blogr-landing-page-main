import Header from "./Intro/Header";

const Intro = () => {
  return (
    <section className="w-screen lg:bg-gradient-to-b bg-gradient-to-r from-very-light-red to-light-red relative overflow-hidden min-h-[600px] rounded-bl-[150px] text-white">
      <img
        src="./bg-pattern-intro-desktop.svg"
        alt="bg pattern intro desktop"
        className="absolute -top-[750px] -right-[250px] w-[2000px] h-[2000px] object-contain lg:hidden"
      />
      <img
        src="./bg-pattern-intro-mobile.svg"
        alt="bg pattern intro mobile"
        className="absolute h-[2000px] object-cover -top-[600px]"
      />
      <Header />
      <div className="relative text-center mx-auto flex flex-col gap-8 mt-[80px] lg:px-[42px] lg:gap-6 z-0">
        <h1 className="font-bold text-6xl lg:text-[32px]">
          A modern publishing platform
        </h1>
        <p className="font-light text-lg">
          Grow your audience and build your online brand
        </p>
        <div className="font-bold flex gap-4 items-center justify-center">
          <button className="w-[138px] bg-white border-[2px] border-white rounded-full text-cta-text hover:bg-cta-hover-background hover:text-white hover:border-cta-hover-background py-2 transition-colors">
            Start for Free
          </button>
          <button className="w-[138px] bg-transparent border-[2px] border-white rounded-full text-white hover:bg-white hover:text-cta-text py-2 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
