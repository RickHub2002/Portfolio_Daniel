import Social_medias from "./Social_medias";

function Profile() {
    return(
        <div className="flex flex-col items-center justify-start">
            <img className="w-[400px] mb-4" src="../src/assets/Terno.png" />
            <Social_medias />
        </div>
    )
}

export default Profile;