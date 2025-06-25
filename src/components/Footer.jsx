import Header_icons from "./Header_icons";

function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center gap-2 bg-white dark:bg-[var(--black-500)] shadow-sm max-[1000px]:pb-15">
            <div className="flex justify-center items-center gap-2 w-full bg-black p-4 text-black dark:text-white text-md">
                <i class="fas fa-copyright"></i>
                <span>2025 FawziUiUx All Rights Reserved , Inc.</span>
            </div>
        </footer>
    )
}

export default Footer;