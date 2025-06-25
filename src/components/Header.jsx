import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Header() {
    // Estado para verificar se o modo escuro está ativado
    const [darkMode, setDarkMode] = useState(false);

    // Efeito para pegar a preferência do usuário no localStorage ou definir como false
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setDarkMode(storedTheme === "dark");
            // Aplica o tema ao body logo que o componente for montado
            if (storedTheme === "dark") {
                document.body.classList.add("dark");
                sun.style.opacity = "0";
                moon.style.display = "1";
            } else {
                document.body.classList.remove("dark");
                moon.style.display = "0";
                sun.style.display = "1";
            }
        } else {
            setDarkMode(false); // Padrão: modo claro
            document.body.classList.remove("dark");
        }

        document.body.style.transition = "background-color 2s ease, color 0.5s ease";

    }, []);

    // Função para alternar o modo escuro/claro
    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark"); // Ativa o modo escuro
                localStorage.setItem("theme", "dark");
                moon.style.display = "block";
                sun.style.display = "none";
            } else {
                document.body.classList.remove("dark"); // Desativa o modo escuro
                localStorage.setItem("theme", "light");
                moon.style.display = "none";
                sun.style.display = "block";
            }
            return newMode;
        });
    };

    return (
        <header className="sticky top-0 w-full flex justify-center pt-8 px-[13%] bg-white dark:bg-[var(--black-500)] shadow-xl shadow-black/20 z-5">
            <nav className="flex justify-center items-center p-2 gap-8 text-xl font-regular text-black dark:text-white sm:justify-between lg:justify-center">
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="home">
                    <h1 className="text-4xl text-[var(--cor-500)]">Daniel</h1>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="introduction" offset={-100}>
                    <span className="max-[1000px]:hidden">Home</span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="about-me" offset={-100}>
                    <span className="max-[1000px]:hidden">Sobre mim</span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="competitions" offset={-100}>
                    <span className="max-[1000px]:hidden">Competências</span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="projects" offset={-100}>
                    <span className="max-[1000px]:hidden">Projetos</span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="contact" offset={-100}>
                    <span className="max-[1000px]:hidden">Contato</span>
                </Link>
                <button
                    id="themeToggle"
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition duration-500 cursor-pointer"
                    onClick={toggleTheme}
                >
                    {/* Exibe o ícone de lua se o modo não for escuro, e sol se for escuro */}
                    <i id="moon" className={`fa-solid fa-moon ${!darkMode ? '' : 'hidden'}`}></i>
                    <i id="sun" className={`fa-solid fa-sun ${darkMode ? '' : 'hidden'}`}></i>
                </button>
            </nav>
        </header>
    );
}

export default Header;
