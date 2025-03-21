import Social_medias from "./Social_medias";

function Profile() {
    return(
        <div className="flex flex-col items-center justify-start">
            <img className="w-[400px]" src="../src/assets/Renan.png" />
            <Socil_medias />
        </div>
    )
}

export default Profile;