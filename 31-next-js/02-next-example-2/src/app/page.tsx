import DashBoardPage from "@/app/dashBoard/page";

export default async function Home() {

    // const BEARER_TOKEN = "a9f92499-8a06-4580-bdbd-9c61db6fbfbc";

    const response = await fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=20',
        {
            headers: {
                'accept': 'application/json',
                'api-key': 'a9f92499-8a06-4580-bdbd-9c61db6fbfbc',
                // 'authorization': `Bearer ${BEARER_TOKEN}`,
            },
        }
    );

    const data = await response.json();
    console.log(data);


  return (
    <div >
      <main>
        <h1>HELLO I am MAIN PAge :)</h1>
          <DashBoardPage />
      </main>
    </div>
  );
};

//
// // SSG (по умолчанию)
// export default async function Page() {
//     const data = await fetch('https://api.com/data');
//     return <div>{data}</div>
// }
//
// // SSR (каждый запрос заново)
// export const dynamic = "force-dynamic";
// export default async function Page() {
//     const data = await fetch('https://api.com/data', { cache: 'no-store' });
//     return <div>{data}</div>
// }
//
// // ISR (обновление раз в 60 секунд в фоне)
// export default async function Page() {
//     const data = await fetch('https://api.com/data', { next: { revalidate: 60 } });
//     return <div>{data}</div>
// }
