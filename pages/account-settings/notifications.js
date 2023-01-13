import SiteLayout from '../../components/SiteLayout';
import AccountSettingsLayout from '../../components/AccountSettingsLayout';

const Notifications = () => {
  return (
    <div>
      <p>Set your notifcation preferences.</p>
      <label>Receive marketing emails</label>
      <br />
      <input type="text" placeholder="Yes" />
      <br />
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default Notifications;
