
const getUserDataById = async (id: number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            cache: "no-store",
        });
        if(!response.ok) throw new Error(response.statusText);


        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

export default getUserDataById;

