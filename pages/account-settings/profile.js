import SiteLayout from '../../components/SiteLayout';
import AccountSettingsLayout from '../../components/AccountSettingsLayout';

const Profile = () => {
  return (
    <div>
      <p>Set your profile information here for others on the site to view.</p>
      <label>Display name</label>
      <br />
      <input type="text" placeholder="John Doe" />
      <br />
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default Profile;
