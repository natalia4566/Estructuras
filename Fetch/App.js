import React, { useState } from 'react';
import './App.css';
import FirstApp from './FirstApp';
import ComponentApp from './ComponentApp';
import Fetch from './components/Fetch';

const App = () => {
  const [url, setUrl] = useState('https://www.apple.com/');

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl);
  };

  return (
    <>
      <FirstApp value={0} />
      <ComponentApp />
      <div>
        <button onClick={() => handleUrlChange('https://www.apple.com/')}>Apple</button>
        <button onClick={() => handleUrlChange('https://consumer.huawei.com/co/offer/?gad_source=1&gclid=Cj0KCQjwxqayBhDFARIsAANWRnT7gn3JieiRPb_IeO3ERM1yu6YL-ECngFqLaRgipSrlM67cN_wE5ZsaAr2yEALw_wcB')}>Huawei</button>
        <button onClick={() => handleUrlChange('https://www.samsung.com/co/offer/?cid=co_pd_ppc_google_pure_ecommerce_ao_text_performance-cross-1x1-220930_keywords-responsive&gad_source=1&gclid=Cj0KCQjwxqayBhDFARIsAANWRnTmZzOVnQadmhI6Gr2MyyO-2Fjafj9tx7q5IpBmRqQPGGqRp-IuPCEaAgudEALw_wcB')}>Samsung</button>
      </div>
      <Fetch url={url} />
    </>
  );
};

export default App;
