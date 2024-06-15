import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export function GiftExpertApp() {
  const [categories, setCategories] = useState(["Naruto", "Dragon ball"]);

  const onAddCategory = (category: string) => {
    setCategories([...categories, category]);
  };

  return (
    <>
      {/* title */}
      <h1>Gif Expert App</h1>

      {/* input search */}
      <AddCategory addCategoryHandler={onAddCategory} />

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
