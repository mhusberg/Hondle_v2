import { getHeroOfTheDay } from "../helpers/TimerHashFunction";
import { Hero } from "../App";


const yesterday = () => {
    let t = new Date();
    t.setDate(t.getDate() - 1);
    return t;
  };

export const getYesterdaysHero = (heroes: Hero []) => {
    const hero = getHeroOfTheDay(yesterday(), heroes);
    return (
        hero
    );
};