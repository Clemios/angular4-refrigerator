"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const express = require("express");
const express_1 = require("@decorators/express");
const di_1 = require("@decorators/di");
let UsersController = class UsersController {
    login(res) {
        res.send(this.generateTokens());
    }
    refresh(res) {
        // emulate long request
        setTimeout(() => res.send(this.generateTokens()), 1000);
    }
    generateTokens() {
        return {
            accessToken: 'access-token-' + Math.random(),
            refreshToken: 'access-token-' + Math.random()
        };
    }
};
__decorate([
    express_1.Post('/login'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "login", null);
__decorate([
    express_1.Post('/refresh'),
    __param(0, express_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "refresh", null);
UsersController = __decorate([
    di_1.Injectable(),
    express_1.Controller('/')
], UsersController);
const app = express();
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
express_1.attachControllers(app, [
    UsersController
]);
const port = process.env.PORT || 4300;
app.listen(port, function () {
    console.log('Authentification server ready on :' + port);
});