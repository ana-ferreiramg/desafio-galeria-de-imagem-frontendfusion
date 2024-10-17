import { useState, useEffect, useMemo } from 'react';

import { Card } from '../components';
import api from '../services/api';

export function Galery() {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem('galeryPicsum')) {
          const response = await api.get('/list');
          const newData = response.data.map(item => ({ ...item, favorite: false }));

          setGalery(newData);
          localStorage.setItem('galeryPicsum', JSON.stringify(newData));
        } else {
          setGalery(JSON.parse(localStorage.getItem('galeryPicsum')));
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {galery ? galery.map(image => (
        <Card key={image.id} image={image} />
      )) : 'LOADING...'}
    </div>
  )
}
