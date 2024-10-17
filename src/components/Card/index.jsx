import { useState, useEffect } from 'react';

import heartRegular from '../../img/heart-regular.svg';
import heartSolid from '../../img/heart-solid.svg';

export function Card({ image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('galeryPicsum')) || [];
    const currentImage = storedData.find(item => item.id === image.id);

    setIsFavorite(currentImage?.favorite || false);
  }, [image.id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    const updateLocalStorage = () => {
      const storedImages = JSON.parse(localStorage.getItem('galeryPicsum'));
      const updatedImages = storedImages.map(item => item.id === image.id ? { ...item, favorite: !item.favorite } : item);
      localStorage.setItem('galeryPicsum', JSON.stringify(updatedImages));
    };

    updateLocalStorage();
  }

  return (
    <div className="bg-transparent p-2 rounded-lg flex flex-col items-center max-w-80 max-h-[270px]">
      <img src={image.download_url} alt={image.author} className="w-[330px] h-[210px]" loading='lazy' decoding="async" />

      <div className="text-center mt-2">
        <button type="button" onClick={() => toggleFavorite(image)}>
          {isFavorite ? <img src={heartSolid} alt="Favoritada" className='w-7' /> : <img src={heartRegular} alt="Não favoritada" className='w-7' />}
        </button>
      </div>
    </div>
  );
}
