"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelmetMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelmetMiddleware = void 0;
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
let HelmetMiddleware = HelmetMiddleware_1 = class HelmetMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    use(req, res, next) {
        if (HelmetMiddleware_1.options) {
            helmet(HelmetMiddleware_1.options)(req, res, next);
        }
        else {
            helmet()(req, res, next);
        }
    }
};
HelmetMiddleware = HelmetMiddleware_1 = __decorate([
    common_1.Injectable()
], HelmetMiddleware);
exports.HelmetMiddleware = HelmetMiddleware;
var content_security_policy_1 = require("./content-security-policy");
Object.defineProperty(exports, "HelmetContentSecurityPolicyMiddleware", { enumerable: true, get: function () { return content_security_policy_1.HelmetContentSecurityPolicyMiddleware; } });
var dns_prefetch_control_1 = require("./dns-prefetch-control");
Object.defineProperty(exports, "HelmetDnsPrefetchControlMiddleware", { enumerable: true, get: function () { return dns_prefetch_control_1.HelmetDnsPrefetchControlMiddleware; } });
var expect_ct_1 = require("./expect-ct");
Object.defineProperty(exports, "HelmetExpectCtMiddleware", { enumerable: true, get: function () { return expect_ct_1.HelmetExpectCtMiddleware; } });
var frameguard_1 = require("./frameguard");
Object.defineProperty(exports, "HelmetFrameguardMiddleware", { enumerable: true, get: function () { return frameguard_1.HelmetFrameguardMiddleware; } });
var hide_powered_by_1 = require("./hide-powered-by");
Object.defineProperty(exports, "HelmetHidePoweredByMiddleware", { enumerable: true, get: function () { return hide_powered_by_1.HelmetHidePoweredByMiddleware; } });
var hpkp_1 = require("./hpkp");
Object.defineProperty(exports, "HelmetHpkpMiddleware", { enumerable: true, get: function () { return hpkp_1.HelmetHpkpMiddleware; } });
var hsts_1 = require("./hsts");
Object.defineProperty(exports, "HelmetHstsMiddleware", { enumerable: true, get: function () { return hsts_1.HelmetHstsMiddleware; } });
var ie_no_open_1 = require("./ie-no-open");
Object.defineProperty(exports, "HelmetIeNoOpenMiddleware", { enumerable: true, get: function () { return ie_no_open_1.HelmetIeNoOpenMiddleware; } });
var no_cache_1 = require("./no-cache");
Object.defineProperty(exports, "HelmetNoCacheMiddleware", { enumerable: true, get: function () { return no_cache_1.HelmetNoCacheMiddleware; } });
var no_sniff_1 = require("./no-sniff");
Object.defineProperty(exports, "HelmetNoSniffMiddleware", { enumerable: true, get: function () { return no_sniff_1.HelmetNoSniffMiddleware; } });
var referrer_policy_1 = require("./referrer-policy");
Object.defineProperty(exports, "HelmetReferrerPolicyMiddleware", { enumerable: true, get: function () { return referrer_policy_1.HelmetReferrerPolicyMiddleware; } });
var xss_filter_1 = require("./xss-filter");
Object.defineProperty(exports, "HelmetXssFilterMiddleware", { enumerable: true, get: function () { return xss_filter_1.HelmetXssFilterMiddleware; } });
//# sourceMappingURL=index.js.map