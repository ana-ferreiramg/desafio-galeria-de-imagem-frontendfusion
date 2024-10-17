import { useState, useEffect, useMemo } from 'react';
import { Card } from '../components';
import api from '../services/api';

import left from '../img/left.svg';
import right from '../img/right.svg';

export function Galery() {
  const [galery, setGalery] = useState(JSON.parse(localStorage.getItem('galeryPicsum')) || []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (newPage) => (newPage > 0 && newPage <= Math.ceil(galery.length / itemsPerPage)) ? setCurrentPage(newPage) : setCurrentPage(currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem('galeryPicsum')) {
          const response = await api.get('/list');
          const newData = response.data.map(item => ({ ...item, favorite: false }));

          setGalery(newData);
          localStorage.setItem('galeryPicsum', JSON.stringify(newData));
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const currentGalery = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return galery.slice(indexOfFirstItem, indexOfLastItem);
  }, [galery, currentPage, itemsPerPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentGalery ? currentGalery.map(image => (
          <Card key={image.id} image={image} />
        )) : 'LOADING...'}
      </div>

      <div className="flex items-center justify-center mt-4">
        {currentPage > 1 && (
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <img src={left} alt="Left" className='w-6' />
            Previous
          </button>
        )}
        <span className="mx-2 text-gray-700">
          Page {currentPage} of {Math.ceil(galery.length / itemsPerPage)}
        </span>
        {currentPage < Math.ceil(galery.length / itemsPerPage) && (
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
            <img src={right} alt="Left" className='w-6' />
          </button>
        )}
      </div>
    </>
  )
}
