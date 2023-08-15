const MiddleSection = () => {
  return (
    <section className="bg-gradient-to-r lg:bg-gradient-to-b from-very-dark-gray-blue to-very-dark-desaturated-blue text-white relative mt-[300px] h-[400px] rounded-tr-[150px] rounded-bl-[150px] lg:min-h-[614px] lg:flex flex-col">
      <img
        src="./illustration-phones.svg"
        alt="illustration-phones.svg"
        className="absolute -top-[70px] left-[100px] z-20 lg:-top-[200px] lg:object-cover lg:w-[450px] lg:h-[450px] lg:left-[0]"
      />
      <div className="overflow-hidden relative h-[400px] rounded-tr-[150px] rounded-bl-[150px]">
        <img
          src="./bg-pattern-circles.svg"
          alt="bg pattern circles"
          className="absolute -top-[500px] -left-[200px] overflow-hidden z-10 lg:-top-[250px] lg:object-cover lg:w-[600px] lg:h-[600px] lg:left-[0]"
        />
      </div>
      <div className="left-[700px] z-30 relative top-[100px] max-w-[530px] lg:left-0 lg:h-max lg:text-center lg:-top-[100px] lg:px-8 lg:mx-auto">
        <h1 className="font-bold text-3xl mb-5">
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
