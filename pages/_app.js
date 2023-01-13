import AccountSettingsLayout from 'components/AccountSettingsLayout';
import SiteLayout from '../components/SiteLayout';

const App = ({ Component, pageProps, router }) => {
  console.log('router:', router);

  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
};

export default App;
