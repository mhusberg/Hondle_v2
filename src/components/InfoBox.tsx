import { useEffect, useState } from "react";
import TimeUntilNextDay from "./TimeUntilNextGame";
import PlaySound from "./PlaySound";
import sound from "../../public/sounds/winner.wav";
import { Hero } from "../App";

import sound1 from "../../public/sounds/winner.wav";
import sound2 from "../../public/sounds/big_bear.wav";
import sound3 from "../../public/sounds/cherry_popper.wav";
import sound4 from "../../public/sounds/diva.wav";
import sound5 from "../../public/sounds/domination.wav";
import sound6 from "../../public/sounds/fabulous.wav";
import sound7 from "../../public/sounds/homewrecker.wav";
import sound8 from "../../public/sounds/homicidal.wav";
import sound9 from "../../public/sounds/matcho.wav";
import sound10 from "../../public/sounds/rainbow_warrior.wav";
import sound11 from "../../public/sounds/savage_ouh.wav";
import sound12 from "../../public/sounds/superstar.wav";
import sound13 from "../../public/sounds/unicorn_stampeede.wav";


const InfoBox = ({ guesses, message, finished, hero}:{
    guesses?: number;
    message?: string;
    finished?: boolean;
    hero: Hero;

}) => {

    const [playSound, setPlaySound] = useState<boolean>(false);
    const [selectedSound, setSelectedSound] = useState<string | null>(null);


    useEffect(() => {
        if (finished) {
            setPlaySound(true);
            const sounds = [
                sound1,
                sound2,
                sound3,
                sound4,
                sound5,
                sound6,
                sound7,
                sound8,
                sound9,
                sound10,
                sound11,
                sound12,
                sound13
            ];
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
            setSelectedSound(randomSound);
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
                    {playSound && <PlaySound fileName={selectedSound ? selectedSound : sound1} />}
                </>
            )}
            <p>Yesterday's hero was: <p style={{ color: "#f3e033" }}>{hero.Name}</p> </p>
        </div>
    );
}

export default InfoBox;
