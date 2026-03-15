import express from 'express';

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', (req, res, next) => {
    res.send('Hi I am JENNA ORTEGA :)  🛣️');
});

export default usersRouter;
