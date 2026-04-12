import React from 'react';
import ButtonBackPage from "@/src/components/ButtonBackPage";
import Link from "next/link";

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
}

interface IUsersList {
    dataUsers: IUser[];
}

const UsersList = ({dataUsers}: IUsersList) => {

    return (
        <>
            <ButtonBackPage/>

            <ul style={{listStyleType: 'none', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                {dataUsers && dataUsers.map((user) => (
                    <Link href={`/users/${user.id}`} key={user.id}>
                        <h2>{user.name}</h2>
                    </Link>
                ))}

            </ul>
        </>
    )
};

export default UsersList;