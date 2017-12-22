"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import { Response as Res } from 'express'
const express_1 = require("@decorators/express");
const di_1 = require("@decorators/di");
let UsersController = class UsersController {
    // private passUsers = false
    // private passData = false
    login(res) {
        res.send(this.generateTokens());
    }
    refresh(res) {
        // emulate long request
        setTimeout(() => res.send(this.generateTokens()), 1000);
    }
    // @Get('/users')
    // public getUsers( @Response() res: Res): void {
    //   this.passUsers = !this.passUsers
    //   if (this.passUsers) {
    //     res.send([
    //       {
    //         'id': 1,
    //         'name': 'John Doe'
    //       },
    //       {
    //         'id': 2,
    //         'name': 'Jane Doe'
    //       }
    //     ])
    //   } else {
    //     res.status(401).send()
    //   }
    // }
    // @Get('/data')
    // public getData( @Response() res: Res): void {
    //   this.passData = !this.passData
    //   if (this.passData) {
    //     res.send([
    //       {
    //         'id': 1,
    //         'name': 'Pepsi'
    //       },
    //       {
    //         'id': 2,
    //         'name': 'Coca-Cola'
    //       }
    //     ])
    //   } else {
    //     // emulate long request
    //     setTimeout(() => res.status(401).send(), 300)
    //   }
    // }
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
    console.log('listening to port ' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyw0Q0FBNEM7QUFDNUMsaURBQW1GO0FBQ25GLHVDQUEyQztBQUkzQyxJQUFNLGVBQWUsR0FBckI7SUFFRSw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBR3BCLEtBQUssQ0FBYyxHQUFHO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUdNLE9BQU8sQ0FBYyxHQUFHO1FBQzdCLHVCQUF1QjtRQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCxxQ0FBcUM7SUFFckMsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLE1BQU07SUFDTixJQUFJO0lBRUosZ0JBQWdCO0lBQ2hCLGdEQUFnRDtJQUNoRCxtQ0FBbUM7SUFFbkMseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9EQUFvRDtJQUNwRCxNQUFNO0lBRU4sSUFBSTtJQUVJLGNBQWM7UUFDcEIsTUFBTSxDQUFDO1lBQ0wsV0FBVyxFQUFFLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVDLFlBQVksRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUM5QyxDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUE7QUEzREM7SUFEQyxjQUFJLENBQUMsUUFBUSxDQUFDO0lBQ0EsV0FBQSxrQkFBUSxFQUFFLENBQUE7Ozs7NENBRXhCO0FBR0Q7SUFEQyxjQUFJLENBQUMsVUFBVSxDQUFDO0lBQ0EsV0FBQSxrQkFBUSxFQUFFLENBQUE7Ozs7OENBRzFCO0FBZEcsZUFBZTtJQUZwQixlQUFVLEVBQUU7SUFDWixvQkFBVSxDQUFDLEdBQUcsQ0FBQztHQUNWLGVBQWUsQ0FpRXBCO0FBRUQsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUE7QUFFckIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNOLElBQXFCLEVBQ3JCLEdBQXFCLEVBQ3JCLElBQTBCLEVBQzFCLEVBQUU7SUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQ1IsOEJBQThCLEVBQzlCLCtEQUErRCxDQUNoRSxDQUFBO0lBQ0QsSUFBSSxFQUFFLENBQUE7QUFDUixDQUFDLENBQUMsQ0FBQTtBQUVGLDJCQUFpQixDQUFDLEdBQUcsRUFBRTtJQUNyQixlQUFlO0NBQ2hCLENBQUMsQ0FBQTtBQUVGLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQTtBQUVyQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG4vLyBpbXBvcnQgeyBSZXNwb25zZSBhcyBSZXMgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgUmVzcG9uc2UsIENvbnRyb2xsZXIsIFBvc3QsIGF0dGFjaENvbnRyb2xsZXJzIH0gZnJvbSAnQGRlY29yYXRvcnMvZXhwcmVzcydcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAZGVjb3JhdG9ycy9kaSdcblxuQEluamVjdGFibGUoKVxuQENvbnRyb2xsZXIoJy8nKVxuY2xhc3MgVXNlcnNDb250cm9sbGVyIHtcblxuICAvLyBwcml2YXRlIHBhc3NVc2VycyA9IGZhbHNlXG4gIC8vIHByaXZhdGUgcGFzc0RhdGEgPSBmYWxzZVxuXG4gIEBQb3N0KCcvbG9naW4nKVxuICBwdWJsaWMgbG9naW4oIEBSZXNwb25zZSgpIHJlcyk6IHZvaWQge1xuICAgIHJlcy5zZW5kKHRoaXMuZ2VuZXJhdGVUb2tlbnMoKSlcbiAgfVxuXG4gIEBQb3N0KCcvcmVmcmVzaCcpXG4gIHB1YmxpYyByZWZyZXNoKCBAUmVzcG9uc2UoKSByZXMpOiB2b2lkIHtcbiAgICAvLyBlbXVsYXRlIGxvbmcgcmVxdWVzdFxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzLnNlbmQodGhpcy5nZW5lcmF0ZVRva2VucygpKSwgMTAwMClcbiAgfVxuXG4gIC8vIEBHZXQoJy91c2VycycpXG4gIC8vIHB1YmxpYyBnZXRVc2VycyggQFJlc3BvbnNlKCkgcmVzOiBSZXMpOiB2b2lkIHtcbiAgLy8gICB0aGlzLnBhc3NVc2VycyA9ICF0aGlzLnBhc3NVc2Vyc1xuXG4gIC8vICAgaWYgKHRoaXMucGFzc1VzZXJzKSB7XG4gIC8vICAgICByZXMuc2VuZChbXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICAnaWQnOiAxLFxuICAvLyAgICAgICAgICduYW1lJzogJ0pvaG4gRG9lJ1xuICAvLyAgICAgICB9LFxuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgJ2lkJzogMixcbiAgLy8gICAgICAgICAnbmFtZSc6ICdKYW5lIERvZSdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgXSlcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIEBHZXQoJy9kYXRhJylcbiAgLy8gcHVibGljIGdldERhdGEoIEBSZXNwb25zZSgpIHJlczogUmVzKTogdm9pZCB7XG4gIC8vICAgdGhpcy5wYXNzRGF0YSA9ICF0aGlzLnBhc3NEYXRhXG5cbiAgLy8gICBpZiAodGhpcy5wYXNzRGF0YSkge1xuICAvLyAgICAgcmVzLnNlbmQoW1xuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgJ2lkJzogMSxcbiAgLy8gICAgICAgICAnbmFtZSc6ICdQZXBzaSdcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgICdpZCc6IDIsXG4gIC8vICAgICAgICAgJ25hbWUnOiAnQ29jYS1Db2xhJ1xuICAvLyAgICAgICB9XG4gIC8vICAgICBdKVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAvLyBlbXVsYXRlIGxvbmcgcmVxdWVzdFxuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiByZXMuc3RhdHVzKDQwMSkuc2VuZCgpLCAzMDApXG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVG9rZW5zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NUb2tlbjogJ2FjY2Vzcy10b2tlbi0nICsgTWF0aC5yYW5kb20oKSxcbiAgICAgIHJlZnJlc2hUb2tlbjogJ2FjY2Vzcy10b2tlbi0nICsgTWF0aC5yYW5kb20oKVxuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKChcbiAgX3JlcTogZXhwcmVzcy5SZXF1ZXN0LFxuICByZXM6IGV4cHJlc3MuUmVzcG9uc2UsXG4gIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICByZXMuaGVhZGVyKFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbidcbiAgKVxuICBuZXh0KClcbn0pXG5cbmF0dGFjaENvbnRyb2xsZXJzKGFwcCwgW1xuICBVc2Vyc0NvbnRyb2xsZXJcbl0pXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQzMDBcblxuYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdsaXN0ZW5pbmcgdG8gcG9ydCAnICsgcG9ydClcbn0pXG4iXX0=