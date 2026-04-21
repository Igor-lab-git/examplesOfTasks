import DashBoardPage from "@/app/dashBoard/page";

export default function Home() {
    console.log('JENNA');
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
