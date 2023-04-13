import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "./Guess";
import { checkGuess } from "../../game-helpers";

export default function GuessResults({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((line) => (
                <Guess guess={checkGuess(guesses[line], answer)} key={`line-${line}`} />
            ))}
        </div>
    );
}
