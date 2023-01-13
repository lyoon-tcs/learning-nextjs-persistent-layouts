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

const SiteLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ActiveLink href="/">Home</ActiveLink>
        <div style={{ display: 'inline-block', marginLeft: '15px' }}>
          <ActiveLink href="/account-settings/basic-information">
            Account Settings
          </ActiveLink>
        </div>
        <br />
        <br />
        <input type="text" placeholder="Search" />
      </nav>
      <div>{children}</div>
    </>
  );
};

export default SiteLayout;
