const MAX_SYMBOLS = 5;

export default function Form({ addGuess, input, setInput, isInputDisabled }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length !== MAX_SYMBOLS) return;

    const guess = input.toUpperCase();
    addGuess(guess);
    setInput("");
  };

  const handleChange = (e) => {
    if (e.target.value.length > MAX_SYMBOLS) return;

    setInput(e.target.value);
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
