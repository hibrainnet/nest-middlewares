import { NestMiddleware } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
export declare class CookieParserMiddleware implements NestMiddleware {
    static configure(secret: string | string[], opts?: cookieParser.CookieParseOptions): void;
    private static secret;
    private static options;
    use(req: any, res: any, next: any): void;
}
