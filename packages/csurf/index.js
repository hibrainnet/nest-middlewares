"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CsurfMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsurfMiddleware = void 0;
const common_1 = require("@nestjs/common");
const csurf = require("csurf");
let CsurfMiddleware = CsurfMiddleware_1 = class CsurfMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (CsurfMiddleware_1.options) {
            csurf(CsurfMiddleware_1.options)(req, res, next);
        }
        else {
            csurf()(req, res, next);
        }
    }
};
CsurfMiddleware = CsurfMiddleware_1 = __decorate([
    common_1.Injectable()
], CsurfMiddleware);
exports.CsurfMiddleware = CsurfMiddleware;
//# sourceMappingURL=index.js.map