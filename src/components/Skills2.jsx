import React from 'react';

// importa os ícones
import reactIcon from '../assets/icones/react.svg';
import vueIcon from '../assets/icones/vuejs.svg';
import tailwindIcon from '../assets/icones/tailwind.svg';
import jsIcon from '../assets/icones/javascript.svg';
import phpIcon from '../assets/icones/php.svg';
import djangoIcon from '../assets/icones/django.svg';
import pythonIcon from '../assets/icones/python.svg';
import javaIcon from '../assets/icones/java.svg';

function Skills2() {
  const icons1 = [
    { src: reactIcon, level: "iniciante" },
    { src: vueIcon, level: "iniciante" },
    { src: tailwindIcon, level: "intermediário" },
    { src: jsIcon, level: "intermediário" }
  ];

  const icons2 = [
    { src: phpIcon, level: "intermediário" },
    { src: djangoIcon, level: "iniciante" },
    { src: pythonIcon, level: "intermediário" },
    { src: javaIcon, level: "iniciante" }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-30 my-10 lg:flex-row lg:justify-around">
      <CircleOfSkills icons={icons1} />
      <CircleOfSkills icons={icons2} />
    </section>
  );
}

function CircleOfSkills({ icons }) {
  const containerSize = 300; 

  return (
    <div className={`grid grid-cols-3 grid-rows-3 gap-0 w-[${containerSize}px] h-[${containerSize}px] justify-center items-center lg:w-100 lg:h-100`}>
      {icons.map((icon, index) => {
        let gridPositionClasses = ""; 

        if (index === 0) gridPositionClasses = "col-start-2 row-start-1";
        else if (index === 1) gridPositionClasses = "col-start-3 row-start-2";
        else if (index === 2) gridPositionClasses = "col-start-2 row-start-3";
        else if (index === 3) gridPositionClasses = "col-start-1 row-start-2";

        return (
          <div key={index} className={`flex flex-col items-center text-sm gap-2 ${gridPositionClasses} p-2`}>
            <img
              src={icon.src}
              className="w-20 duration-400 ease-in-out hover:scale-120"
              alt={icon.src}
            />
            <span className="text-[var(--black-500)] dark:text-white mt-1">{icon.level}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Skills2;
