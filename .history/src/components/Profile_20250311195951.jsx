function Profile() {
    return(
        <div className="flex flex-col items-center justify-start h-[620px]">
            <img className="min-w-[450px]  object-contain" src="../src/assets/Renan.png" />
            <div className="flex justify-center items-center gap-2.5 dark:text-white">
                <a href="https://www.linkedin.com/in/daniel-rezez-293740207/" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-rezez-293740207/" target="_blank""></i></a>
            </div>
        </div>
    )
}

export default Profile;