
interface IUser {
    id: number;
    name: string;
    age: number;
    email: string;
    isLove: boolean;
    func: (user: IUser) => IUser;
    success: string | number;
    address: IAddress[];
}

interface IAddress {
    country: string;
    city: string;
}

const logName = (user: IUser): IUser => {
    return user;
}

const user: IUser = {
    id: 1,
    name: "Jenna",
    age: 23,
    email: "jenna@yandex.ru",
    isLove: true,
    func: logName,
    success: 200,
    address: [
        {
            country: "USA",
            city: "Los Angeles",
        },
        {
            country: "USA",
            city: "Los Angeles",
        },
        {
            country: "USA",
            city: "Los Angeles",
        }
    ]
};

console.log(user);
console.log(logName(user));
