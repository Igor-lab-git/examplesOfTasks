
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

// ПРИМИТИВНЫЕ ТИПЫ
// String
// Number
// BigInt
// Boolean
// undefined
// null
// Symbol

// СПЕЦИАЛЬНЫЕ ТИПЫ
// any отключает проверку типов
// unknown
// never
// void
// + литералы

// union 
let data: string | number;
data = 15;
data = "Jenna";

type Color = "red" | "green" | "black";

const color: Color ="green"

const fruits: string[] = ["banan", "aple", "mango"];
fruits.push("pear") //ok
// fruits.push(5) //bad

const things = ["Jenna", 5, true]; //автоматически определяет типы

const addNumbers = (a: number, b: number): number => {
    return a + b;
};

console.log(addNumbers(5, 15));


//any
let sumArg: any = null;
sumArg = "Jenna";
sumArg = 15;
sumArg = true;

let sumArr: any[] = ["Jenna", 5, true];
console.log(sumArr.push(null));



//Кортеж
let user2: [string, number];
user2 = ["Igor", 36];

let color2: [number, number, number] = [255, 255, 255];