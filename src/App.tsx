import Header from './components/Header';
import './index.scss';
import Body from './components/Body';
import Footer from './components/Footer';
import useMockApiConnect from './hooks/useMockApiConnect';
import PrivacyModal from './components/Modal/components/PrivacyModal';
import TermsModal from './components/Modal/components/TermsModal';
function App() {
  const { isReadyToRender } = useMockApiConnect();

  if (!isReadyToRender) return null;

  return (
    <main>
      <Header />
      <Body />
      <Footer />
      <PrivacyModal />
      <TermsModal />
    </main>
  );
}

export default App;
