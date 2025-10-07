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
            } else {
                document.body.classList.remove("dark");
            }
        } else {
            setDarkMode(false); // Padrão: modo claro
            document.body.classList.remove("dark");
        }
    }, []);

    // Função para alternar o modo escuro/claro
    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark"); // Ativa o modo escuro
                localStorage.setItem("theme", "dark");
            } else {
                document.body.classList.remove("dark"); // Desativa o modo escuro
                localStorage.setItem("theme", "light");
            }
            return newMode;
        });
    };

    return (
        <header id="headerContent" className="fixed w-full flex justify-center pt-8 px-[13%] bg-white dark:bg-[var(--black-500)] shadow-sm">
            <nav id="navContent" className="w-full flex justify-between items-center p-2 gap-8 text-xl font-regular text-black dark:text-white lg:justify-center">
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <h1 className="text-2xl">Daniel</h1>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Home</span>
                    
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Sobre mim</span>

                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Projetos</span>
             
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Competências</span>
             
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Contato</span>
             
                </Link>
                <button 
                    id="themeToggle" 
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition" 
                    onClick={toggleTheme}
                >
                    {/* Exibe o ícone de lua se o modo não for escuro, e sol se for escuro */}
                    <i className={`fa-solid fa-moon ${!darkMode ? '' : 'hidden'}`}></i>
                    <i className={`fa-solid fa-sun ${darkMode ? '' : 'hidden'}`}></i>
                </button>
            </nav>
        </header>
    );
}

export default Header;
