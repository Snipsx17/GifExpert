import React, { useState } from 'react';

type Props = {
  onNewCategory: (category: string) => void;
};

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Add Category"
        value={inputValue}
        onChange={onChangeHandler}
        name="AddCategory"
      />
      <button>Add Category</button>
    </form>
  );
};
