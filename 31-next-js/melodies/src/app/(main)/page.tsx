import {TrendingSongs} from "@/widgets/trending-songs";
import {Hero} from "@/widgets/hero";
import HERO_IMAGES from "@/shared/costants/heroImages";
import style from "./main.module.scss"

const Home = () => {

  return (
    <>
        <Hero
            customClassName={style.customHero}
            backgroundImage={HERO_IMAGES.home.src}>
            <div>ЭТО children</div>
            <p>И ЭТО children</p>
        </Hero>
        <h1 >Main Page</h1>
        <TrendingSongs />
    </>
  );
};

export default Home;
