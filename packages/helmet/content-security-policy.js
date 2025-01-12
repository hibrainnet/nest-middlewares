"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelmetContentSecurityPolicyMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelmetContentSecurityPolicyMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
let HelmetContentSecurityPolicyMiddleware = HelmetContentSecurityPolicyMiddleware_1 = class HelmetContentSecurityPolicyMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (HelmetContentSecurityPolicyMiddleware_1.options) {
            helmet.contentSecurityPolicy(HelmetContentSecurityPolicyMiddleware_1.options)(req, res, next);
        }
        else {
            throw new Error('HelmetContentSecurityPolicyMiddleware requires you'
                + ' to call `configure` before injection to set CSP options.');
        }
    }
};
HelmetContentSecurityPolicyMiddleware = HelmetContentSecurityPolicyMiddleware_1 = __decorate([
    common_1.Injectable()
], HelmetContentSecurityPolicyMiddleware);
exports.HelmetContentSecurityPolicyMiddleware = HelmetContentSecurityPolicyMiddleware;
//# sourceMappingURL=content-security-policy.js.map