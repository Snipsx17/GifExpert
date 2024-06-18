import { Gif } from '../helpers/getGifs';

export const GifGridItem = ({ title, url }: Gif) => (
  <div className="card">
    <p>{title}</p>
    <img src={url} alt={title} />
  </div>
);
