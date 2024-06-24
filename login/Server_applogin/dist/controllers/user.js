"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const newUser = (req, res) => {
    const { body } = req;
    res.json({
        message: 'New user',
        body: body
    });
};
exports.newUser = newUser;
const loginUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Login user',
        body: req.body
    });
};
exports.loginUser = loginUser;
