import './Profile.css';
import profileDemo from "../../images/profile-demo.svg";

function Profile() {
  return (
    <div className="profile">
      <img src={profileDemo} alt="" className="profile-demo" />
    </div>
  );
}

export default Profile;
