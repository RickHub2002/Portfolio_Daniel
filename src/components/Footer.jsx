import Header_icons from "./Header_icons";

function Footer() {
    return (
        <footer className="w-full bg-[#f5f5f5] shadow-sm dark:bg-[var(--black-600)] dark:text-white">
            <div className="flex justify-center items-center gap-2 w-full py-10 text-md">
                <i class="fas fa-copyright"></i>
                <span>2025 - Daniel Rezes</span>
            </div>
        </footer>
    )
}

export default Footer;