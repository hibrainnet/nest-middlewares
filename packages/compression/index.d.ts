import { NestMiddleware } from '@nestjs/common';
import * as compression from 'compression';
export declare class CompressionMiddleware implements NestMiddleware {
    static configure(opts: compression.CompressionOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
