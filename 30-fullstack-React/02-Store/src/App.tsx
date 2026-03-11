import { useEffect, useState } from "react";
import "./App.css";

interface ITracks {
  id: number;
  title: string;
  url: string;
}

function App() {
  const [tracks, setTracks] = useState<ITracks[] | null>(null);

  // const array = [
  //   {id: 1, title: "Robert Palmer, Stephen Hague", url: "https://images.gamebanana.com/img/av/5e53d23967bc3.png"},
  //   {id: 2, title: "Tomas Nevergreen", url: "https://avatars.githubusercontent.com/u/4228268?v=4?s=400"},
  //   {id: 3, title: "Every Day Of Your Life, Stephen Hague", url: "https://workspace.ru/upload/main/142/25havs9wns4qelnilgexxz63fts4fbjk/2731746-_1_.jpg"},
  //   {id: 4, title: "My Confession", url: "https://avatars.mds.yandex.net/i?id=567c259ae1ebb916ca3de32177c25393_l-10558413-images-thumbs&n=13"},
  // ]

  useEffect(() => {
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": "5aa039e6-7fa1-49b2-aa20-05896e86553a"
      }
    })
        .then((res) => res.json())
        .then((json) => setTracks(json.data));
  }, []);

  return (
    <>
      <h1>Musicfun Player</h1>
      {tracks === null && <span>Loading...</span>}
      {tracks?.length === 0 && <span>No tracks :(</span>}
      {tracks &&
        tracks.map((trak) => (
          <div key={trak.id}>
            <span>{trak.title}</span>
            <img src={trak.url} alt="" />
          </div>
        ))}
    </>
  );
}

export default App;
