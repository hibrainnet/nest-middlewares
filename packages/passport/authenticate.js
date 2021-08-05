"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PassportAuthenticateMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportAuthenticateMiddleware = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("passport");
let PassportAuthenticateMiddleware = PassportAuthenticateMiddleware_1 = class PassportAuthenticateMiddleware {
    static configure(types, opts) {
        this.types = types;
        this.options = opts;
    }
    use(req, res, next) {
        passport_1.authenticate(PassportAuthenticateMiddleware_1.types, PassportAuthenticateMiddleware_1.options)(req, res, next);
    }
};
PassportAuthenticateMiddleware = PassportAuthenticateMiddleware_1 = __decorate([
    common_1.Injectable()
], PassportAuthenticateMiddleware);
exports.PassportAuthenticateMiddleware = PassportAuthenticateMiddleware;
//# sourceMappingURL=authenticate.js.map