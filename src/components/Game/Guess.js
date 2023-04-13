import { range } from "../../utils";

export default function Guess({ guess }) {
    return (
        <p className="guess">
            {range(5).map((cell) => {
                const letterData = guess?.[cell];
                let classes = "cell";
                if (letterData) classes += " " + letterData.status;

                return (
                    <span className={classes} key={`${guess}-${cell}`}>
                        {letterData ? letterData.letter : ""}
                    </span>
                );
            })}
        </p>
    );
}
