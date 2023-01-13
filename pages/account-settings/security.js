import SiteLayout from '../../components/SiteLayout';
import AccountSettingsLayout from '../../components/AccountSettingsLayout';

const Security = () => {
  return (
    <AccountSettingsLayout>
      <div>
        <p>Set your security preferences.</p>
        <label>Enable two-factor authentication</label>
        <br />
        <input type="text" placeholder="Yes" />
        <br />
        <br />
        <label>Notify me of new logins</label>
        <br />
        <input type="text" placeholder="Yes" />
        <br />
        <br />
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </AccountSettingsLayout>
  );
};

export default Security;
