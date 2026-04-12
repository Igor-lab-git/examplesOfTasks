import React from 'react';
import getUserDataById from "@/src/utils/getUserById";
import ButtonBackPage from "@/src/components/ButtonBackPage";

interface IUserPage {
    params: Promise<{ id: string }>
};

const UserPage = async ({params}: IUserPage) => {
    const { id } = await params;

    const dataUserById = await getUserDataById(Number(id));

    return (
        <div>
            <ButtonBackPage/>
            <div style={{listStyleType: 'none', display:'flex', flexDirection: 'column', justifyContent: 'space-between', rowGap: "10px"}}>
                <h2>User: #{dataUserById.id}</h2>
                <h2>{dataUserById?.name}</h2>
                <h3>{dataUserById?.username}</h3>
                <span>{dataUserById?.email}</span>
                <div>
                    <span>{dataUserById?.address.street}</span>
                    <span>{dataUserById?.address.suite}</span>
                    <span>{dataUserById?.address.zipcode}</span>
                </div>
            </div>
        </div>
    )
};

export default UserPage;
