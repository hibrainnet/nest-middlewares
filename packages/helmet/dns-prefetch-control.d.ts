import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetDnsPrefetchControlMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetDnsPrefetchControlConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
