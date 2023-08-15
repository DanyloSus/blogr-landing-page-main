import { useEffect, useState } from "react";

interface SectionProps {
  h1?: string;
  h21: string;
  h22: string;
  p1: string;
  p2: string;
  img: string;
  direction: string;
}

const Section = ({ h1, h21, h22, p1, p2, img, direction }: SectionProps) => {
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
    <section className="relative pl-[168px]">
      <img
        src={`./${img}`}
        alt="illustration editor desktop"
        className={`absolute -${direction}-[300px] top-[72px] -mt-[160px]`}
        style={
          direction === "left"
            ? { margin: "-250px 0px 0px -500px" }
            : windowWidth <= 1300
            ? { right: "-600px" }
            : { right: "-300px" }
        }
      />
      <h1 className="mt-[160px] text-center text-very-dark-gray-blue font-bold text-4xl -ml-[168px]">
        {h1 ? h1 : ""}
      </h1>
      <div
        className="max-w-[520px] mt-[80px]"
        style={direction === "left" ? { margin: "250px 0px 0px 500px" } : {}}
      >
        <h2 className="text-2xl font-bold text-very-dark-gray-blue">{h21}</h2>
        <p className="text-body-copy mt-6">{p1}</p>
      </div>
      <div
        className="max-w-[520px] mt-[80px]"
        style={direction === "left" ? { margin: "80px 0px 0px 500px" } : {}}
      >
        <h2 className="text-2xl font-bold text-very-dark-gray-blue">{h22}</h2>
        <p className="text-body-copy mt-6">{p2}</p>
      </div>
    </section>
  );
};

export default Section;
