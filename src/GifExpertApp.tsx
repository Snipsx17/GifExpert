import { useState } from "react";

export function GiftExpertApp() {
  const [categories, setCategories] = useState(["Naruto", "Dragon ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Power Rangers"]);
  };

  return (
    <>
      {/* title */}
      <h1>Gif Expert App</h1>

      {/* input search */}
      <button onClick={onAddCategory}>Add</button>

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
