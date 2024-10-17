import { useState, useEffect } from 'react';

import heartRegular from '../../img/heart-regular.svg';
import heartSolid from '../../img/heart-solid.svg';

export function Card({ image }) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const images = JSON.parse(localStorage.getItem('galeryPicsum')) || [];
    const currentImage = images.find(item => item.id === image.id);

    if (currentImage) {
      setLike(currentImage.favorite);
    }
  }, [image.id]);

  const toggleFavorite = () => {
    setLike(!like);

    const updateLocalStorage = () => {
      const images = JSON.parse(localStorage.getItem('galeryPicsum'));
      const updatedImages = images.map(item => {
        if (item.id === image.id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      });
      localStorage.setItem('galeryPicsum', JSON.stringify(updatedImages));
    };

    updateLocalStorage();
  }

  return (
    <div className="bg-transparent p-2 rounded-lg flex-1 max-h-[300px]">
      <img src={image.download_url} alt={image.author} className="w-full h-[85%]" />

      <div className="text-right h-[10%] pt-2">
        <button type="button" className="text-left" onClick={() => toggleFavorite(image)}>
          {like ? <img src={heartSolid} alt="Favoritada" className='w-7' /> : <img src={heartRegular} alt="Não favoritada" className='w-7' />}
        </button>
      </div>
    </div>
  );
}
