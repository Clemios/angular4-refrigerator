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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyxpREFBbUY7QUFDbkYsdUNBQTJDO0FBSTNDLElBQU0sZUFBZSxHQUFyQjtJQUdTLEtBQUssQ0FBYyxHQUFHO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUdNLE9BQU8sQ0FBYyxHQUFHO1FBQzdCLHVCQUF1QjtRQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLENBQUM7WUFDTCxXQUFXLEVBQUUsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUMsWUFBWSxFQUFFLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQzlDLENBQUE7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQWpCQztJQURDLGNBQUksQ0FBQyxRQUFRLENBQUM7SUFDQSxXQUFBLGtCQUFRLEVBQUUsQ0FBQTs7Ozs0Q0FFeEI7QUFHRDtJQURDLGNBQUksQ0FBQyxVQUFVLENBQUM7SUFDQSxXQUFBLGtCQUFRLEVBQUUsQ0FBQTs7Ozs4Q0FHMUI7QUFYRyxlQUFlO0lBRnBCLGVBQVUsRUFBRTtJQUNaLG9CQUFVLENBQUMsR0FBRyxDQUFDO0dBQ1YsZUFBZSxDQW9CcEI7QUFFRCxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQTtBQUVyQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQ04sSUFBcUIsRUFDckIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtJQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FDUiw4QkFBOEIsRUFDOUIsK0RBQStELENBQ2hFLENBQUE7SUFDRCxJQUFJLEVBQUUsQ0FBQTtBQUNSLENBQUMsQ0FBQyxDQUFBO0FBRUYsMkJBQWlCLENBQUMsR0FBRyxFQUFFO0lBQ3JCLGVBQWU7Q0FDaEIsQ0FBQyxDQUFBO0FBRUYsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO0FBRXJDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUM5RCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IFJlc3BvbnNlLCBDb250cm9sbGVyLCBQb3N0LCBhdHRhY2hDb250cm9sbGVycyB9IGZyb20gJ0BkZWNvcmF0b3JzL2V4cHJlc3MnXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGRlY29yYXRvcnMvZGknXG5cbkBJbmplY3RhYmxlKClcbkBDb250cm9sbGVyKCcvJylcbmNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG5cbiAgQFBvc3QoJy9sb2dpbicpXG4gIHB1YmxpYyBsb2dpbiggQFJlc3BvbnNlKCkgcmVzKTogdm9pZCB7XG4gICAgcmVzLnNlbmQodGhpcy5nZW5lcmF0ZVRva2VucygpKVxuICB9XG5cbiAgQFBvc3QoJy9yZWZyZXNoJylcbiAgcHVibGljIHJlZnJlc2goIEBSZXNwb25zZSgpIHJlcyk6IHZvaWQge1xuICAgIC8vIGVtdWxhdGUgbG9uZyByZXF1ZXN0XG4gICAgc2V0VGltZW91dCgoKSA9PiByZXMuc2VuZCh0aGlzLmdlbmVyYXRlVG9rZW5zKCkpLCAxMDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVRva2VucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXNzVG9rZW46ICdhY2Nlc3MtdG9rZW4tJyArIE1hdGgucmFuZG9tKCksXG4gICAgICByZWZyZXNoVG9rZW46ICdhY2Nlc3MtdG9rZW4tJyArIE1hdGgucmFuZG9tKClcbiAgICB9XG4gIH1cblxufVxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZSgoXG4gIF9yZXE6IGV4cHJlc3MuUmVxdWVzdCxcbiAgcmVzOiBleHByZXNzLlJlc3BvbnNlLFxuICBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvblxuKSA9PiB7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLmhlYWRlcihcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb24nXG4gIClcbiAgbmV4dCgpXG59KVxuXG5hdHRhY2hDb250cm9sbGVycyhhcHAsIFtcbiAgVXNlcnNDb250cm9sbGVyXG5dKVxuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MzAwXG5cbmFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnQXV0aGVudGlmaWNhdGlvbiBzZXJ2ZXIgcmVhZHkgb24gcG9ydCAnICsgcG9ydClcbn0pXG4iXX0=