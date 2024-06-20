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
      <div className="inputGroup">
        <input
          id="addCategory"
          type="text"
          placeholder="Type something"
          value={inputValue}
          onChange={onChangeHandler}
          name="AddCategory"
        />
        <label htmlFor="addCategory">Type something and find a gif</label>
      </div>

      <button>Add Category</button>
    </form>
  );
};
