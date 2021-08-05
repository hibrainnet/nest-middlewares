import { NestMiddleware } from '@nestjs/common';
import * as serveIndex from 'serve-index';
export declare class ServeIndexMiddleware implements NestMiddleware {
    static configure(path: string, opts?: serveIndex.Options): void;
    private static options;
    private static path;
    use(req: any, res: any, next: any): void;
}
