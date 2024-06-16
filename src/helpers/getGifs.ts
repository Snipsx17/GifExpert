type GifData = {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
};

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=4lYawTEU828pewHwun8EvM6SYhCuW5Q9`;

  const responce = await fetch(url);
  const { data } = await responce.json();

  const gits = data.map(
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
