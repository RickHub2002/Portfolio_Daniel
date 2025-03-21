const Skills = ({ name, level }) => {
    return (
        <div className="w-full mb-6">
            {/* Nome da Skill */}
            <div className="text-xl mb-2">{name}</div>

            {/* Container da linha e da marcação */}
            <div className="relative w-full h-4 bg-gray-300 rounded-full">
                {/* Parte preenchida da linha */}
                <div 
                    className="absolute h-full bg-[var(--cor-200)] rounded-full"
                    style={{ width: `${level}%` }}
                ></div>

                {/* Marca da Skill (bolinha) */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 border-2 border-white rounded-full"
                    style={{ left: `calc(${level}% - 12px)` }} 
                ></div>
            </div>
        </div>
    );
};

export default Skills;
