// import models from '../models/models.js';
import db from './DatabaseService.mjs';

class UserService {
    getAll = async () => {
        try {

            const response = await db.models.User.findAll();
            return {
                status: "success",
                data: response  // ← ИСПРАВЬТЕ ЗДЕСЬ!
            }
        } catch (error) {
            return {
                status: "error",
                data: error
            }
        }
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