import { NestMiddleware } from '@nestjs/common';
export declare class PassportAuthenticateMiddleware implements NestMiddleware {
    static configure(types: any, opts: any): void;
    private static types;
    private static options;
    use(req: any, res: any, next: any): void;
}
