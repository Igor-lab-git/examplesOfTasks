import NavigationSidebar from "@/widgets/navigation-sidebar/ui/NavigationSidebar";
import style from "./page.module.scss"
import {TrendingSongs} from "@/widgets/trending-songs";
import {Player} from "@/features/player";


const Home = () => {
  return (
    <div >
     <main className={style.mainPage}>
         <NavigationSidebar />
       <h1>Main Page</h1>
         <TrendingSongs />
         <Player />
     </main>
    </div>
  );
};

export default Home;
