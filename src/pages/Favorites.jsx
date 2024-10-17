import { useState, useEffect } from "react";
import { Card } from "../components";
import { Empty } from "./Empty";

export function Favorites() {
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = JSON.parse(localStorage.getItem('galeryPicsum')) || [];
        const favorites = images.filter((item) => item.favorite === true);

        setGalery(favorites);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[85vh] lg:max-h-[90vh] overflow-y-auto no-scrollbar ">
      {galery.length === 0 ? <div className="font-bold col-span-3 flex items-center justify-center "><Empty /></div> : galery.map(image => (
        <Card key={image.id} image={image} />
      ))}
    </div>
  )
}
