import { NestMiddleware } from '@nestjs/common';
export declare class VhostMiddleware implements NestMiddleware {
    static configure(path: string, opts: any): void;
    private static path;
    private static handler;
    use(req: any, res: any, next: any): void;
}
