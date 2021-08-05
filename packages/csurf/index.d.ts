import { NestMiddleware } from '@nestjs/common';
import * as csurf from 'csurf';
import { Request } from 'express';
export declare class CsurfMiddleware implements NestMiddleware {
    static configure(opts: CsurfOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
export interface CsurfOptions {
    value?: (req: Request) => string;
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
}
