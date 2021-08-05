"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VhostMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VhostMiddleware = void 0;
const common_1 = require("@nestjs/common");
const vhost = require("vhost");
let VhostMiddleware = VhostMiddleware_1 = class VhostMiddleware {
    static configure(path, opts) {
        this.path = path;
        this.handler = opts;
    }
    use(req, res, next) {
        if (VhostMiddleware_1.path && VhostMiddleware_1.handler) {
            vhost(VhostMiddleware_1.path, VhostMiddleware_1.handler)(req, res, next);
        }
        else {
            throw new Error('ServeStaticMiddleware requires a path and handler in configure.');
        }
    }
};
VhostMiddleware = VhostMiddleware_1 = __decorate([
    common_1.Injectable()
], VhostMiddleware);
exports.VhostMiddleware = VhostMiddleware;
//# sourceMappingURL=index.js.map