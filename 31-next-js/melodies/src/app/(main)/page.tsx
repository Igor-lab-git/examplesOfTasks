import {TrendingSongs} from "@/widgets/trending-songs";
import {Hero} from "@/widgets/hero";
import HERO_IMAGES from "@/shared/costants/heroImages";
import style from "./main.module.scss"
import HeroHomeContent from "@/widgets/hero/HeroControls/HeroHome/HeroHomeContent";
import PlayListsPublic from "@/widgets/PlayListsPublic/PlayListsPublic";

const Home = () => {

  return (
    <>
        <Hero
            customClassName={style.customHero}
            backgroundImage={HERO_IMAGES.home.src}>
            <HeroHomeContent />
        </Hero>
        <TrendingSongs />
        <PlayListsPublic/>
    </>
  );
};

export default Home;
