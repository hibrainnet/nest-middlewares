"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ServeStaticMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServeStaticMiddleware = void 0;
const common_1 = require("@nestjs/common");
const serveStatic = require("serve-static");
let ServeStaticMiddleware = ServeStaticMiddleware_1 = class ServeStaticMiddleware {
    static configure(root, opts) {
        this.root = root;
        this.options = opts;
    }
    use(req, res, next) {
        if (ServeStaticMiddleware_1.root) {
            serveStatic(ServeStaticMiddleware_1.root, ServeStaticMiddleware_1.options)(req, res, next);
        }
        else {
            throw new Error('ServeStaticMiddleware requires a root in configure.');
        }
    }
};
ServeStaticMiddleware = ServeStaticMiddleware_1 = __decorate([
    common_1.Injectable()
], ServeStaticMiddleware);
exports.ServeStaticMiddleware = ServeStaticMiddleware;
//# sourceMappingURL=index.js.map