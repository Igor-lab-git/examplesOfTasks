import express from 'express';

const testRouter = express.Router();

/* GET home page. */
testRouter.get('/', (req, res, next) => {
    res.render('test', {title: 'JENNA + IGOR :)'});
});

export default testRouter;
