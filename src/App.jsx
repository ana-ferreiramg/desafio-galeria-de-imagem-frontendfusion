import { useState, useEffect } from 'react';
import { Card, Navbar } from './components';
import api from './services/api';

function App() {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/list');
      setGalery(response.data);
    })()
  }, []);

  return (
    <div className="container w-full h-screen lg:max-w-7xl md:max-w-3xl mx:auto p-2">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full min-h-[90vh] lg:max-h-[90vh] overflow-y-auto no-scrollbar">
        {galery.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </div>

  );
}

export default App;

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
