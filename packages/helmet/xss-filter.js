"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelmetXssFilterMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelmetXssFilterMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
let HelmetXssFilterMiddleware = HelmetXssFilterMiddleware_1 = class HelmetXssFilterMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (HelmetXssFilterMiddleware_1.options) {
            helmet.xssFilter()(req, res, next);
        }
        else {
            helmet.xssFilter()(req, res, next);
        }
    }
};
HelmetXssFilterMiddleware = HelmetXssFilterMiddleware_1 = __decorate([
    common_1.Injectable()
], HelmetXssFilterMiddleware);
exports.HelmetXssFilterMiddleware = HelmetXssFilterMiddleware;
//# sourceMappingURL=xss-filter.js.map