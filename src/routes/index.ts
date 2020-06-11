import express from 'express';

const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: '掘金' });
});

router.get('/login', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('login', { title: '掘金 | 登录' });
});

router.get('/register', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('register', { title: '掘金 | 注册' });
});

export default router;