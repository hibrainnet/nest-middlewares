"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelmetFrameguardMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelmetFrameguardMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
let HelmetFrameguardMiddleware = HelmetFrameguardMiddleware_1 = class HelmetFrameguardMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (HelmetFrameguardMiddleware_1.options) {
            return helmet.frameguard(HelmetFrameguardMiddleware_1.options)(req, res, next);
        }
        else {
            return helmet.frameguard()(req, res, next);
        }
    }
};
HelmetFrameguardMiddleware = HelmetFrameguardMiddleware_1 = __decorate([
    common_1.Injectable()
], HelmetFrameguardMiddleware);
exports.HelmetFrameguardMiddleware = HelmetFrameguardMiddleware;
//# sourceMappingURL=frameguard.js.map