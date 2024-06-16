import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export function GiftExpertApp() {
  const [categories, setCategories] = useState(['Naruto']);

  const onNewCategory = (newCategory: string) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* title */}
      <h1>Gif Expert App</h1>

      {/* input search */}
      <AddCategory onNewCategory={onNewCategory} />

      {/* Gif List */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      {/* Git Item */}
    </>
  );
}
