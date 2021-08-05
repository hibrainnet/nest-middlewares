import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetExpectCtMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetExpectCtConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}