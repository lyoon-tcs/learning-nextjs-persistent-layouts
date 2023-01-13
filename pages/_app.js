import AccountSettingsLayout from 'components/AccountSettingsLayout';
import SiteLayout from '../components/SiteLayout';

const App = ({ Component, pageProps }) => {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
};

export default App;
