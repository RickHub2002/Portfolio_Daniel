import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Header() {
  // Estado para controlar o modo escuro
  const [darkMode, setDarkMode] = useState(false);

  // Ao montar o componente, carrega o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toda vez que o darkMode mudar, atualiza a classe e localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Alterna o tema
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="sticky top-0 w-full flex justify-center pt-8 px-[13%] bg-white dark:bg-[var(--black-500)] shadow-xl shadow-black/20 z-50">
      <nav className="flex justify-center items-center p-2 gap-8 text-xl font-regular text-black dark:text-white sm:justify-between lg:justify-center w-full max-w-7xl">
        <Link
          className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200"
          smooth={true}
          to="home"
          offset={-100}
        >
          <h1 className="text-4xl text-[var(--cor-500)] font-bold cursor-pointer">
            Daniel
          </h1>
        </Link>

        <Link
          className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200 max-[1000px]:hidden"
          smooth={true}
          to="introduction"
          offset={-100}
        >
          Home
        </Link>

        <Link
          className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200 max-[1000px]:hidden"
          smooth={true}
          to="about-me"
          offset={-100}
        >
          Sobre mim
        </Link>

        <Link
          className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200 max-[1000px]:hidden"
          smooth={true}
          to="competitions"
          offset={-100}
        >
          Competências
        </Link>

        <Link
          className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200 max-[1000px]:hidden"
          smooth={true}
          to="projects"
          offset={-100}
        >
          Projetos
        </Link>

        <Link
          className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200 max-[1000px]:hidden"
          smooth={true}
          to="contact"
          offset={-100}
        >
          Contato
        </Link>

        <button
          aria-label="Alternar modo claro/escuro"
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition duration-700 cursor-pointer"
          type="button"
        >
          {darkMode ? (
            <i className="fa-solid fa-sun text-yellow-400"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-800"></i>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
