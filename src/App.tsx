import { useEffect, useState } from 'react';

import { initMockAPI } from './mocks';

function App() {
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  useEffect(() => {
    initMockAPI().then(() => setIsReadyToRender(true));
  }, []);
  if (!isReadyToRender) return null;

  return <div>반갑습니다.</div>;
}

export default App;
