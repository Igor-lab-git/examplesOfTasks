import React from 'react';
import ClientButtons from "@/app/contacts/ClientButtons";
import LikeButton from "@/app/contacts/LikeButton";

export const metadata = {
    title: "ContactsPage PAge",
}


const ContactsPage = () => {

    return (
        <>
            <main>
                <ClientButtons />
                <LikeButton />
                <h1>ContactsPage PAGE :)</h1>
            </main>
        </>
    )
};

export default ContactsPage;
