import Link from 'next/link';

import SiteLayout from '../../components/SiteLayout';
import AccountSettingsLayout from '../../components/AccountSettingsLayout';

const BasicInformation = () => {
  return (
    <AccountSettingsLayout>
      <div>
        <p>
          Set your login preferences, help us personalize your experience and
          make big account changes here.
        </p>
        <label>Email address</label>
        <br />
        <input type="email" placeholder="johndoe@example.com" />
        <br />
        <br />
        <label>Country/region</label>
        <br />
        <input type="text" placeholder="Canada" />
        <br />
        <br />
        <label>Language</label>
        <br />
        <input type="text" placeholder="English" />
        <br />
        <br />
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </AccountSettingsLayout>
  );
};

export default BasicInformation;
