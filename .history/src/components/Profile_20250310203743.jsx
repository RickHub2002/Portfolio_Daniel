function Profile() {
    return(
        <div className="flex flex-col items-center justify-center bg-red-500 w-50">
            <img className="w-[100%] h-[100%]" src="../src/assets/Renan.png" />
            <div className="flex justify-center items-center gap-1">
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Profile;