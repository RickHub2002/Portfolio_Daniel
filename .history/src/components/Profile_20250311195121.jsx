function Profile() {
    return(
        <div className="flex flex-col items-center justify-start w-[50%] h-[620px]">
            <img className="min-w-[400px]  object-contain" src="../src/assets/Renan.png" />
            <div className="flex justify-center items-center gap-2.5 dark:text-white">
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Profile;