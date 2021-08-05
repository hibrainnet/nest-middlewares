import { NestMiddleware } from '@nestjs/common';
import * as cookieSession from 'cookie-session';
export declare class CookieSessionMiddleware implements NestMiddleware {
    static configure(opts: cookieSession.CookieSessionOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
