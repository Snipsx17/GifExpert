import React, { useState } from "react";

type Props = {
  addCategoryHandler: (category: string) => void;
};

export const AddCategory = ({ addCategoryHandler }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Add Category"
        value={inputValue}
        onChange={onInputChange}
      />
      <button
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          addCategoryHandler(inputValue);
          setInputValue("");
        }}
      >
        Add Category
      </button>
    </form>
  );
};
