"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CorsMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsMiddleware = void 0;
const common_1 = require("@nestjs/common");
const cors = require("cors");
let CorsMiddleware = CorsMiddleware_1 = class CorsMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (CorsMiddleware_1.options) {
            cors(CorsMiddleware_1.options)(req, res, next);
        }
        else {
            cors()(req, res, next);
        }
    }
};
CorsMiddleware = CorsMiddleware_1 = __decorate([
    common_1.Injectable()
], CorsMiddleware);
exports.CorsMiddleware = CorsMiddleware;
//# sourceMappingURL=index.js.map