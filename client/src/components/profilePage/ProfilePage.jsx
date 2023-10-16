
import "./ProfilePage.css";

function ProfilePage() {
    return (
        <div className="Profile-Container">

            <div className="Profile-Right">
                <h1>About me</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>

            <div className="Profile-Left">
                <div className="Profile-Image">
                    <img src="https://i.imgur.com/0tepHqb.png" className="Profile-img" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
