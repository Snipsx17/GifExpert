import { useEffect, useState } from 'react';
import { Gif, getGifs } from '../helpers/getGifs';

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
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </div>
  );
};
