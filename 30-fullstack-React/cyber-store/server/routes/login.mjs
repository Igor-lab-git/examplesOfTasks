import express from 'express';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
    const {email, password} = req.body; // здесь уже обработанное тело через все middleware в app
    console.log(email, password);
    res.send(`Вашь email: ${email} и вашь пароль: ${password}`);
});

// ДЛЯ ТЕСТА В БРАУЗЕРЕ - GET запрос
loginRouter.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Пароль" required min="5">
            <button type="submit">Отправить</button>
        </form>
    `);
});

export default loginRouter;