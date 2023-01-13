import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import AccountSettingsLayout from '../../components/AccountSettingsLayout';

const Billing = () => {
  return (
    <div>
      <p>Set your billing information</p>
      <label>Credit card number</label>
      <br />
      <input type="text" placeholder="4242 4242 4242 4242" />
      <br />
      <br />
      <label>Billing address</label>
      <br />
      <input type="text" placeholder="555 Party Drive" />
      <br />
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default Billing;
