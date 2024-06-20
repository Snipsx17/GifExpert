type GifData = {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
};

export interface Gif {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }`;

  const responce = await fetch(url);
  const { data } = await responce.json();

  const gits: Gif[] = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }: GifData) => ({
      id,
      title,
      url,
    })
  );
  return gits;
};
