import models from '../models/models.js';

class UserService {
    getAll = async() => {
    try {
         console.log("🔍 UserService.getAll вызван");
        console.log("📦 db.models:", db.models);
        console.log("👤 db.models.User:", db.models?.User);
        
        const response = await db.models.default.User.findAll();
        
        console.log("📊 Результат findAll:", response);
        console.log("📊 Количество пользователей:", response.length);
        
        if (response.length === 0) {
            console.log("⚠️ В таблице users нет записей");
        }
        
        return {
            status: "success",
            data: response  // ← ИСПРАВЬТЕ ЗДЕСЬ!
        }
    } catch(error) {
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