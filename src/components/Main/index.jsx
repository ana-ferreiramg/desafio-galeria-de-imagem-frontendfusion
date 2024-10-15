import { useState, useEffect } from 'react';
import { Card } from '../index';
import api from '../../services/api';

export function Main() {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/list');
      setGalery(response.data);
    })()
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full min-h-[90vh] lg:max-h-[90vh] overflow-y-auto no-scrollbar">
      {galery.map(image => (
        <Card key={image.id} image={image} />
      ))}
    </div>
  )
}
