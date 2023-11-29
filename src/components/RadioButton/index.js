import React, { useState } from 'react';

const RadioButtonExample = () => {
  // State untuk menyimpan nilai radio button yang dipilih
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler untuk memperbarui nilai radio button yang dipilih
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        Option 1
      </label>

      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        Option 2
      </label>

      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        Option 3
      </label>

      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default RadioButtonExample;
