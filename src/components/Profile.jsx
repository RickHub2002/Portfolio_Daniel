import terno from '../assets/Terno.png';
import Social_medias from "./Social_medias";

function Profile() {
    return (
        <div className="flex flex-col items-center justify-start max-[1040px]:hidden">
            <img className="w-[400px] mb-4" src={terno} alt="Foto de perfil" />
            <Social_medias />
        </div>
    );
}

export default Profile;
