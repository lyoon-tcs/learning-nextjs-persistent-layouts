import SiteLayout from '../../components/SiteLayout';
import AccountSettingsLayout from '../../components/AccountSettingsLayout';

const TeamSettings = () => {
  return (
    <div>
      <p>Set your team preferences here.</p>
      <label>Team name</label>
      <br />
      <input type="text" placeholder="My Team" />
      <br />
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default TeamSettings;
