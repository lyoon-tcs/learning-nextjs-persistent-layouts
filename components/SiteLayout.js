import Link from 'next/link';

const SiteLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <div style={{ display: 'inline-block', marginLeft: '15px' }}>
          <Link href="/account-settings/basic-information">
            Account Settings
          </Link>{' '}
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
