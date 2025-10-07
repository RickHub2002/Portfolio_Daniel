function Profile() {
    return(
        <div className="flex flex-col items-center justify-start h-[620px] bg-red-500">
            <img className="min-w-[400px] max-w-[450px]  object-contain bg-blue-500" src="../src/assets/Renan.png" />
            <div className="flex justify-center items-center gap-2.5 dark:text-white">
                <a href="mailto:danielrezez@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://www.instagram.com/daniel.rezes/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/DanielRezez" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-rezez-293740207/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default Profile;