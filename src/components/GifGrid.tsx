import { useEffect, useState } from 'react';
import { Gif, getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }: { category: string }) => {
  const [images, setImages] = useState<Gif[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const images = await getGifs(category);
      setImages(images);
    };
    getImages();
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
