import Link from 'next/link';

import { useRouter } from 'next/router';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  return (
    <Link href={href} scroll={false} legacyBehavior>
      <a
        style={
          router.pathname === href
            ? {
                border: '1px solid red',
                display: 'inline-block',
                padding: '14px'
              }
            : {
                border: '1px solid blue',
                display: 'inline-block',
                padding: '14px'
              }
        }
      >
        {children}
      </a>
    </Link>
  );
};

const AccountSettingsLayout = ({ children }) => {
  return (
    <div>
      <h1>Account Settings</h1>
      <div
        style={{
          display: 'inline-block',
          width: '500px',
          height: '100px',
          overflow: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        <ActiveLink href="/account-settings/basic-information">
          Basic Information
        </ActiveLink>
        <ActiveLink href="/account-settings/profile">Profile</ActiveLink>
        <ActiveLink href="/account-settings/team-settings">
          Team Settings
        </ActiveLink>
        <ActiveLink href="/account-settings/billing">Billing</ActiveLink>
        <ActiveLink href="/account-settings/notifications">
          Notifications
        </ActiveLink>
        <ActiveLink href="/account-settings/security">Security</ActiveLink>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AccountSettingsLayout;
