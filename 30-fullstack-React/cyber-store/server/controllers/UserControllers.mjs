import userService from "../services/UserService.mjs";

class UserControllers {

    getData = (req, res) => {
        const userQueryId = req.query.id;
        const userParamsId = req.params.id;

        console.log(userParamsId);
        console.log(userParamsId);

        if(userQueryId || userParamsId) {
            console.log('👉 Вызван getById с id:', userQueryId || userParamsId);
            this.getById(req, res);
        } else {
            this.getAll(req, res);
        }
    }

    getAll = async (req, res) => {  // ← добавить async
        try {
            const userAll = await userService.getAll(); // ← добавить await
            res.send(userAll);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    getById(req, res) {
        const id = req.query.id || req.params.id;
        const userById = userService.getById(id);
        res.send(userById);
    }

    create = (req, res) => {
        const createdUser = userService.create();
        res.send(createdUser)
        // res.send({test: "create :) 🛣️"})
    }

    patch = (req, res) => {
        const id = req.params.id;
        const updatedUser = userService.patch(id);
        res.send(updatedUser)
        // res.send({test: "patch :) 🛣️"})
    }

    update(req, res) {
        const id = req.params.id;
        const updatedUser = userService.update(id);
        res.send(updatedUser);
        // res.send({test: "update :) 🛣️"});
    }

    delete(req, res) {
        const id = req.params.id;
        const updatedUser = userService.delete(id);
        // res.send({test: "delete :) 🛣️"});
        res.send(updatedUser);
    }
};

export default new UserControllers();