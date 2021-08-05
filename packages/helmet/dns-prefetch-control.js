"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelmetDnsPrefetchControlMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelmetDnsPrefetchControlMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
let HelmetDnsPrefetchControlMiddleware = HelmetDnsPrefetchControlMiddleware_1 = class HelmetDnsPrefetchControlMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (HelmetDnsPrefetchControlMiddleware_1.options) {
            helmet.dnsPrefetchControl(HelmetDnsPrefetchControlMiddleware_1.options)(req, res, next);
        }
        else {
            helmet.dnsPrefetchControl()(req, res, next);
        }
    }
};
HelmetDnsPrefetchControlMiddleware = HelmetDnsPrefetchControlMiddleware_1 = __decorate([
    common_1.Injectable()
], HelmetDnsPrefetchControlMiddleware);
exports.HelmetDnsPrefetchControlMiddleware = HelmetDnsPrefetchControlMiddleware;
//# sourceMappingURL=dns-prefetch-control.js.map