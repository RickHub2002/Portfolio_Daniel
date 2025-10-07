import { useState } from "react";

const Skills = ({ name, level }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const audioFiles = [
        '../src/assets/audios/1.mp3',
        '../src/assets/audios/2.mp3',
        '../src/assets/audios/3.mp3',
        '../src/assets/audios/4.mp3',
        '../src/assets/audios/5.mp3',
        '../src/assets/audios/6.mp3',
        '../src/assets/audios/7.mp3',
        '../src/assets/audios/8.mp3',
        '../src/assets/audios/9.mp3',
    ]

    const playSound = () => {
        if (isPlaying) return;

        const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        const audio = new Audio(randomAudio);

        setIsPlaying(true);
        audio.play();
    }

    const level2 = 30

    return (
        <div className="w-full py-2 ">
            {/* Nome da Skill */}
            <div className="text-xl text-black dark:text-white mb-2">{name}</div>

            {/* Container da linha e da marcação */}
            <div className="relative w-full h-4 bg-[var(--black-50)] rounded-full">
                {/* Parte preenchida da linha */}
                <div
                    className="absolute h-full bg-[var(--cor-400)] rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
                {/* Marca da Skill (bolinha) */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--cor-50)] drop-shadow-sm border-2 border-[var(--cor-400)] rounded-full"
                    style={{ left: `calc(${level}% - 12px)` }}
                ></div>

            </div>
        </div>
    );
};

export default Skills;
