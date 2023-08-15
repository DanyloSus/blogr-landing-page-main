import { useEffect, useState } from "react";

interface SectionProps {
  h1?: string;
  h21: string;
  h22: string;
  p1: string;
  p2: string;
  img: string;
  mImg: string;
  direction: string;
}

const Section = ({
  h1,
  h21,
  h22,
  p1,
  p2,
  img,
  mImg,
  direction,
}: SectionProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative pl-[168px] lg:flex flex-col lg:px-6 lg:text-center">
      <img
        src={`./${img}`}
        alt={img}
        className={`absolute -${direction}-[300px] top-[72px] -mt-[160px] lg:hidden`}
        style={
          direction === "left"
            ? { margin: "-250px 0px 0px -500px" }
            : windowWidth <= 1300
            ? { right: "-600px" }
            : { right: "-300px" }
        }
      />

      <h1 className="mt-[160px] text-center text-very-dark-gray-blue font-bold text-4xl -ml-[168px] lg:text-3xl lg:ml-0">
        {h1 ? h1 : ""}
      </h1>
      <img src={`./${mImg}`} alt={mImg} className="w-full hidden lg:block" />
      <div
        className="max-w-[520px] mt-[80px] lg:mt-10 lg:mx-auto"
        style={
          direction === "left"
            ? windowWidth >= 1024
              ? { margin: "250px 0px 0px 500px" }
              : {}
            : {}
        }
      >
        <h2 className="text-2xl font-bold text-very-dark-gray-blue lg:text-3xl">
          {h21}
        </h2>
        <p className="text-body-copy mt-6 lg:mt-3 lg:text-[17px]">{p1}</p>
      </div>
      <div
        className="max-w-[520px] mt-[80px] lg:mt-10 lg:mx-auto"
        style={
          direction === "left"
            ? windowWidth >= 1024
              ? { margin: "80px 0px 0px 500px" }
              : {}
            : {}
        }
      >
        <h2 className="text-2xl font-bold text-very-dark-gray-blue lg:text-3xl">
          {h22}
        </h2>
        <p className="text-body-copy mt-6 lg:mt-3 lg:text-[17px]">{p2}</p>
      </div>
    </section>
  );
};

export default Section;
