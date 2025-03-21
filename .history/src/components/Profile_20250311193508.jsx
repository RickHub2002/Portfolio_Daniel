function Profile() {
    return(
        <div className="flex flex-col items-center justify-start -gap-22 w-[50%] h-[620px]">
            <img className="min-w-[300px]  object-contain" src="../src/assets/Renan.png" />
            <div className="flex justify-center items-center gap-1 text-white">
                <i class="fa-solid fa-envelope text-white"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Profile;