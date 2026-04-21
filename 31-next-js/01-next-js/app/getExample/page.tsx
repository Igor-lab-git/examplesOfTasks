import React from 'react'
import ButtonGetExample from "@/src/components/ButtonGetExample";

export const metadata = {
    title: "GetExample PAge",
    description: "Описание страницы",
    openGraph: {
        title: "Заголовок для соцсетей",
        description: "Описание для соцсетей",
        images: [{
            url: "https://site.com/preview.jpg",
            width: 1200,
            height: 630,
        }],
        type: "website",
    },
};

export const dynamic = "force-dynamic";
// "auto"	По умолчанию. Next.js сам решает (кеширует если может)
// "force-dynamic"	Никогда не кэшировать. Всегда свежая страница
// "force-static"	Всегда кэшировать. Генерируется один раз при сборке
// "error"	Ошибка, если Next.js не может сделать статическую версию

const GetExample = async () => {

    const getResponse = async () => {
        const response = await fetch('http://localhost:3000/api/hello');
        return response.json()
    };

    const { message } = await getResponse();
    return (
        <>
            <div>GetExample</div>
            {message && (
                <h1>{message}</h1>
            )}
            <ButtonGetExample />
        </>

    )
};

export default GetExample;
