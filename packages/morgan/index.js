"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MorganMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorganMiddleware = void 0;
const common_1 = require("@nestjs/common");
const morgan = require("morgan");
// import { Request, Response } from '@nestjs/common';
let MorganMiddleware = MorganMiddleware_1 = class MorganMiddleware {
    static configure(format, opts) {
        this.format = format;
        this.options = opts;
    }
    static token(name, callback) {
        return morgan.token(name, callback);
    }
    use(req, res, next) {
        if (MorganMiddleware_1.format) {
            morgan(MorganMiddleware_1.format, MorganMiddleware_1.options)(req, res, next);
        }
        else {
            throw new Error('MorganMiddleware must be configured with a logger format.');
        }
    }
};
MorganMiddleware = MorganMiddleware_1 = __decorate([
    common_1.Injectable()
], MorganMiddleware);
exports.MorganMiddleware = MorganMiddleware;
//# sourceMappingURL=index.js.map