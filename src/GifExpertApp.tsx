import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export function GiftExpertApp() {
  const [categories, setCategories] = useState<string[]>([]);

  const onNewCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {[...categories].reverse().map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
