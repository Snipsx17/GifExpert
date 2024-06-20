import { GifGridItem } from './GifGridItem';
import { useFetchImages } from '../hooks/useFetchImages';

export const GifGrid = ({ category }: { category: string }) => {
  const { images, isLoading } = useFetchImages(category);

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
