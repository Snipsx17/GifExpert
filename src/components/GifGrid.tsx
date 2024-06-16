import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }: { category: string }) => {
  getGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </div>
  );
};
