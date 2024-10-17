import { useEffect, useState } from "react";
import TimeUntilNextDay from "./TimeUntilNextGame";
import PlaySound from "./PlaySound";
import sound from "../../public/sounds/winner.wav";
import { Hero } from "../App";


const InfoBox = ({ guesses, message, finished, hero}:{
    guesses?: number;
    message?: string;
    finished?: boolean;
    hero: Hero;

}) => {

    const [playSound, setPlaySound] = useState<boolean>(false);

    useEffect(() => {
        if (finished) {
            setPlaySound(true);
        }
    }, [finished]);
    
    return (
        <div className="info-box">
            Number of guesses: <p style={{ color: "#f3e033" }}>{guesses}</p>
            {message}
            {finished && (
                <>
                    <div style={{ color: "#24d475" }}>Congratulations! You've won!</div>
                    <TimeUntilNextDay />
                    {playSound && <PlaySound fileName={sound} />}
                </>
            )}
            <p>Yesterday's hero was: <p style={{ color: "#f3e033" }}>{hero.Name}</p> </p>
        </div>
    );
}

export default InfoBox;
