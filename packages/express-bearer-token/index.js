"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ExpressBearerTokenMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressBearerTokenMiddleware = void 0;
const common_1 = require("@nestjs/common");
const bearerToken = require("express-bearer-token");
let ExpressBearerTokenMiddleware = ExpressBearerTokenMiddleware_1 = class ExpressBearerTokenMiddleware {
    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (ExpressBearerTokenMiddleware_1.options) {
            bearerToken(ExpressBearerTokenMiddleware_1.options)(req, res, next);
        }
        else {
            bearerToken()(req, res, next);
        }
    }
};
ExpressBearerTokenMiddleware = ExpressBearerTokenMiddleware_1 = __decorate([
    common_1.Injectable()
], ExpressBearerTokenMiddleware);
exports.ExpressBearerTokenMiddleware = ExpressBearerTokenMiddleware;
//# sourceMappingURL=index.js.map