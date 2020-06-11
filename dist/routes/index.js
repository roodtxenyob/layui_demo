"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: '掘金' });
});
router.get('/login', function (req, res, next) {
    res.render('login', { title: '掘金 | 登录' });
});
router.get('/register', function (req, res, next) {
    res.render('register', { title: '掘金 | 注册' });
});
exports.default = router;
