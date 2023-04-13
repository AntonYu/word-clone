import React from "react";

const MAX_SYMBOLS = 5;

export default function Form({ addGuess, isInputDisabled }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length !== MAX_SYMBOLS) return;

    addGuess(input);
    setInput("");
  };

  const handleChange = (e) => {
    if (e.target.value.length > MAX_SYMBOLS) return;

    setInput(e.target.value.toUpperCase());
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={handleChange}
          pattern={`[a-zA-Z]{${MAX_SYMBOLS}}`}
          disabled={isInputDisabled}
        />
      </form>
    </div>
  );
}
