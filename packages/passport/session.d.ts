import { NestMiddleware } from '@nestjs/common';
export declare class PassportSessionMiddleware implements NestMiddleware {
    static configure(opts: any): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
