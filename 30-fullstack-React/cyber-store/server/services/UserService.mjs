import db from "./DatabaseService.mjs";

class UserService {
    getAll() {
        return [
            {id: 1, name: 'John Doe' , email: 'johndoe@gmail.com', password: '123456'},
            {id: 2, name: 'Jenna' , email: 'Jenna@gmail.com', password: '123456'},
            {id: 3, name: 'Igor' , email: 'Igor@gmail.com', password: '123456'},
            {id: 4, name: 'Pete' , email: 'Pete@gmail.com', password: '123456'},
        ];
    }

    getById() {
        return `User on id: 1 detected`;
    }

    create = () => {
        return {
            status: "User Created successfully 🛣️",
            name: "Igor",
            email: "john@gmail.com",
        }
    }

    patch = (id) => {
        return {
            status: `User on id: ${id} patched 🛣️`,
            name: "IGOR",
            email: "Igor@gmail.com",
            age: 25
        }
    }

    update(id) {
        return {
            status: `User on id: ${id} updated 🛣️`,
            name: "JENNA + LOVE",
            email: "JENNA@gmail.com",
            age: 23
        }
    }

    delete(id) {
        return {
            message: `User on id: ${id} deleted 🛣️`,
            name: null,
            email: null,
            age: null,
            status: null
        }
    }
};

export default new UserService();