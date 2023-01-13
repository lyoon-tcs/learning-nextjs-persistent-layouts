import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ margin: '0 auto', width: 800, textAlign: 'center' }}>
      <h1>Welcome to this Awesome Website</h1>
      <Link href="/account-settings/basic-information">
        View account settings
      </Link>
    </div>
  );
};

export default HomePage;
