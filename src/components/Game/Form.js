import React from "react";

const WORD_SYMBOLS_COUNT = 5;

export default function Form({addGuess, isInputDisabled}) {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.length !== WORD_SYMBOLS_COUNT) {
            window.alert(`Please input exactly ${WORD_SYMBOLS_COUNT} symbols 🐝`);
            return;
        }

        addGuess(input);
        setInput("");
    };

    const handleChange = (e) => {
        if (e.target.value.length > WORD_SYMBOLS_COUNT) return;

        setInput(e.target.value.toUpperCase());
    };

    return (
        <div>
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    required
                    id="guess-input"
                    type="text"
                    value={input}
                    onChange={handleChange}
                    minLength={WORD_SYMBOLS_COUNT}
                    maxLength={WORD_SYMBOLS_COUNT}
                    pattern={`[a-zA-Z]{${WORD_SYMBOLS_COUNT}}`}
                    disabled={isInputDisabled}
                />
            </form>
        </div>
    );
}
