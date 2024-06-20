import { useEffect, useState } from 'react';
import { Gif, getGifs } from '../helpers/getGifs';

export const useFetchImages = (category: string) => {
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getImages = async () => {
      const images = await getGifs(category);
      setImages(images);
      setIsLoading(false);
    };
    getImages();
  }, [category]);

  return {
    images,
    isLoading,
  };
};
