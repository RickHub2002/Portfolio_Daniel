function Profile() {
    return(
        <div className="flex-col items-center justify-center">
            <img className="w-60 h-60 bg-red-500" src="../src/assets/Renan.png" />
            <div className="flex justify-center items-center">
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Profile;