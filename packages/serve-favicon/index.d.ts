import { NestMiddleware } from '@nestjs/common';
export declare class ServeFaviconMiddleware implements NestMiddleware {
    static configure(path: string, opts?: ServeFaviconOptions): void;
    private static path;
    private static options;
    use(req: any, res: any, next: any): void;
}
export interface ServeFaviconOptions {
    maxAge?: number;
}
