import React from 'react'
import ButtonBackPage from "@/src/components/ButtonBackPage";
import getUsersData from "@/src/utils/getUsers";
import UsersList from "@/src/components/UsersList";


const UsersPage = async () => {

    const dataUsers = await getUsersData();

    return (
        <>
            <ButtonBackPage/>
            <h1>Users Page</h1>
            <UsersList dataUsers={dataUsers}/>
        </>
    )
};

export default UsersPage;
