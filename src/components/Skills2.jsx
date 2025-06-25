import React from 'react';

function Skills2() {
  const icons1 = [
    { src: "react.svg", level: "iniciante" },
    { src: "vuejs.svg", level: "iniciante" },
    { src: "tailwind.svg", level: "intermediário" },
    { src: "javascript.svg", level: "intermediário" }
  ];

  const icons2 = [
    { src: "php.svg", level: "intermediário" },
    { src: "django.svg", level: "iniciante" },
    { src: "python.svg", level: "intermediário" },
    { src: "java.svg", level: "iniciante" }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-30 my-10 lg:flex-row lg:justify-around">
      <CircleOfSkills icons={icons1} />
      <CircleOfSkills icons={icons2} />
    </section>
  );
}

function CircleOfSkills({ icons }) {
  const containerSize = 100; 
  const containerSizeReduced = 300; 

  return (
    <div className={`grid grid-cols-3 grid-rows-3 gap-0 w-[${containerSizeReduced}px] h-[${containerSizeReduced}px] justify-center items-center lg:w-100 lg:h-100`}>
      {icons.map((icon, index) => {
        let gridPositionClasses = ""; 

        if (index === 0) {
          gridPositionClasses = "col-start-2 row-start-1";
        } else if (index === 1) {
          gridPositionClasses = "col-start-3 row-start-2";
        } else if (index === 2) {
          gridPositionClasses = "col-start-2 row-start-3";
        } else if (index === 3) {
          gridPositionClasses = "col-start-1 row-start-2";
        }

        return (
          <div
            key={index}
            className={`flex flex-col items-center text-sm gap-2 ${gridPositionClasses} p-2`}
          >
            <img
              src={`../src/assets/icones/${icon.src}`}
              className="w-20 duration-400 ease-in-out hover:scale-120"
              alt={icon.src}
            />
            <span className="text-white mt-1">{icon.level}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Skills2;