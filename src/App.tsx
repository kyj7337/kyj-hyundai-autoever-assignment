import { useEffect, useState } from 'react';

import { initMockAPI } from './mocks';

import Header from './components/Header';
import './index.scss';
import Body from './components/Body';
function App() {
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  useEffect(() => {
    initMockAPI().then(() => setIsReadyToRender(true));
  }, []);
  if (!isReadyToRender) return null;

  return (
    <main>
      <Header />
      <Body />
    </main>
  );
}

export default App;
