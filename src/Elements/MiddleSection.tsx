const MiddleSection = () => {
  return (
    <section className="bg-gradient-to-r from-very-dark-gray-blue to-very-dark-desaturated-blue text-white relative mt-[300px] h-[400px] rounded-tr-[150px] rounded-bl-[150px]">
      <img
        src="./illustration-phones.svg"
        alt="illustration-phones.svg"
        className="absolute -top-[70px] left-[100px] z-20"
      />
      <div className="overflow-hidden relative h-[400px]">
        <img
          src="./bg-pattern-circles.svg"
          alt="bg pattern circles"
          className="absolute -top-[500px] -left-[200px] overflow-hidden z-10"
        />
      </div>
      <div className="left-[700px] z-30 absolute top-[100px] max-w-[530px]">
        <h1 className="font-bold text-4xl mb-5">
          State of the Art Infrastructure
        </h1>
        <p className="font-light opacity-60">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
};

export default MiddleSection;
