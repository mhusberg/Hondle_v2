import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/images/HoN_logo.png';
import heroesData from './heroes.json'
import HeroSearchBar from './components/HeroSearchBar';
import PropertiesRow from './components/PropertiesRow';
import PropertiesHeader from './components/PropertiesHeader';
import InfoBox from './components/InfoBox';
import Button from 'react-bootstrap/Button';
import DisplayConfetti from './components/Confetti';
import { getHeroOfTheDay } from './helpers/TimerHashFunction';
import { getYesterdaysHero } from './helpers/YesterdaysHero';


export type Hero = {
  Name: string,
  Gender: string,
  Attribute: string,
  Role: string,
  Side: string,
  RangeType: string,
  Complexity: string,
  ImagePath: string
}

const heroes: Hero[] = heroesData.map((hero) => ({
  ...hero,
  Gender: hero.Gender as Hero['Gender'],
  Attribute: hero.Attribute as Hero['Attribute'], // Asserting the correct type for Attribute
  Role: hero.Role as Hero['Role'], // Asserting the correct type for Role
  Side: hero.Side as Hero['Side'], // Asserting the correct type for Side
  RangeType: hero.RangeType as Hero['RangeType'], // Asserting the correct type for RangeType
  Complexity: hero.Complexity as Hero['Complexity'], // Asserting the correct type for Complexity
}));



const App = () => {
  const [guess, setGuess] = useState('');
  const [guessHistory, setGuessHistory] = useState<Hero[]>([]);
  const [remainingHeroes, setGuessedHistoryList] = useState<Hero[]>(heroes);
  const [inputValue, setInputValue] = useState("");
  const [wonGame, setWonGame] = useState<boolean>(false);
  const targetHero = useRef({} as Hero);
   useEffect(() => {
    targetHero.current = getHeroOfTheDay(new Date(), heroes)
  },[])
  const yesterdaysHero = getYesterdaysHero(heroes);

  const handleGuessChange = (value: string) => {
    const searchTerm = value.trim();
    setGuess(searchTerm);
  };

  const handleGuessSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const guessedHero = guess.trim();
    const guessedHeroObject = heroes.find(hero => hero.Name.toLowerCase() === guessedHero.toLowerCase());
  
    if (!guessedHeroObject) {
      return;
    }

    const isHeroInGuessHistory = guessHistory.some(hero => hero.Name === guessedHeroObject.Name);
    if (isHeroInGuessHistory) {
      return;
    }

    const isCorrect = guessedHeroObject.Name.toUpperCase() === targetHero.current.Name.toUpperCase();
    const updatedGuessHistory = [...guessHistory, guessedHeroObject];
    setGuessHistory(updatedGuessHistory);
  
    if (isCorrect) {
      setWonGame(true);
    } else {
      setGuessedHistoryList(remainingHeroes.filter(item => item.Name !== guess));
    }
  };

const handleInputReset = () => {
  setInputValue("");
};

  return (
    <div className="bg">
      <div className="App">
        <DisplayConfetti run={wonGame}/>
        <img className="hon-logo" alt="" src={logo}></img>
        <form onSubmit={handleGuessSubmit}>
          <div className="hero-searchbar">
            <HeroSearchBar onSelect={handleGuessChange} value={inputValue} setValue={setInputValue} heroes={remainingHeroes}></HeroSearchBar>
          </div>
          <Button disabled={wonGame} className="btn my-3" variant="success" type="submit" onClick={handleInputReset}>Guess</Button>
        </form>
        {wonGame && (<InfoBox guesses={guessHistory.length} finished={wonGame}></InfoBox>)}
        {guessHistory.length > 0 && <PropertiesHeader></PropertiesHeader>}
        {[...guessHistory].reverse().map((hero, index) => (
          <PropertiesRow key={index} hero={hero} targetHero={targetHero.current}></PropertiesRow>
        ))}
        <p style={{ color: "white" }}> Yesterday's hero: <a style={{ color: "#f3e033" }}>{yesterdaysHero.Name}</a></p>
      </div>
    </div>
  );
};
export default App;
