const Skills = ({ name, level }) => {
    const level2 = 30
    
    return (
        <div className="w-full mb-6">
            {/* Nome da Skill */}
            <div className="text-xl mb-2">{name}</div>

            {/* Container da linha e da marcação */}
            <div className="relative w-full h-4 bg-[var(--black-50)] rounded-full">
                {/* Parte preenchida da linha */}
                <div 
                    className="absolute h-full bg-[var(--cor-400)] rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
                {/* Marca da Skill (bolinha) */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[var(--black-50)] left-[calc(${level2})] border-2 border-[var(--cor-400)] rounded-full"
                    
                ></div>
            </div>
        </div>
    );
};

export default Skills;
